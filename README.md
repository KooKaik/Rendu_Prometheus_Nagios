# TPs Final Monitoring Prometheus / Nagios

## Sommaire

- [Prometheus & Grafana](#prometheus--grafana)
- [Nagios](#nagios)

---
## Prometheus & Grafana

### 1 : Installer Prometheus & Grafana


**Container Prometheus**
````
prometheus:
    image: prom/prometheus:latest
    ports:
      - 9090:9090
    volumes:
      - ./prometheus:/etc/prometheus
      - ./prometheus/data:/var/lib/prometheus
    command: --web.enable-lifecycle  --config.file=/etc/prometheus/prometheus.yml
    networks:
      - hosts
````

**Container Grafana**
```
  grafana:
    image: grafana/grafana:latest
    ports:
      - 3000:3000
    volumes:
      - ./grafana:/var/lib/grafana
      - ./grafana/grafana.ini:/etc/grafana/grafana.ini
    environment:
      - GF_PATHS_CONFIG=/etc/grafana/grafana.ini
    depends_on:
      - prometheus
    networks:
      - hosts
```

**Ajout data source sur Grafana**
![DataSource](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Capture%20Ecran/DataSourceGrafana.png)

### 2 : Créer un node exporter de la machine

**Container Node Exporter**
```
  node-exporter:
    image: prom/node-exporter
    ports:
      - 9100:9100
    networks:
      - hosts
```

**Ajout de node-exporter dans [prometheus.yml](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Fichier%20de%20Configuration/prometheus/prometheus.yml)**
```
scrape_configs:

  - job_name: 'node-exporter' 
    static_configs: 
      - targets: ['node-exporter:9100']
```
![TargetNodeExporter](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Capture%20Ecran/TargetNodeExporter.png)

### 3 : Remonter les métrique du CPU et de l'espace disque utilisé

**Métrique du CPU (en %)**
```
100 - (avg by (instance) (irate(node_cpu_seconds_total[5m])) * 100)
```
![PercentageCPU](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Capture%20Ecran/PercentageCPU.png)

**Métrique de l'espace disque utilisé (en %)**
```
100 - ((node_filesystem_avail_bytes * 100) / node_filesystem_size_bytes)
```
![PercentageDisk](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Capture%20Ecran/PercentageDisk.png)

### 6 : Mettre en place un serveur de stockage NextCloud

**Container MariaDB (Base de données)**
```
  nextcloud_db:
    image: mariadb:latest
    restart: always
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    volumes:
      - ./nextcloud/database:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=$NEXTCLOUD_MYSQL_ROOT_PASSWORD
      - MYSQL_DATABASE=$NEXTCLOUD_MYSQL_DATABASE
      - MYSQL_USER=$NEXTCLOUD_MYSQL_USER
      - MYSQL_PASSWORD=$NEXTCLOUD_MYSQL_PASSWORD
    networks:
      - hosts
```

**Container NextCloud**
```
  nextcloud_app:
    image: nextcloud:latest
    restart: always
    ports:
      - 8080:80
    links:
      - nextcloud_db
    volumes:
      - ./nextcloud/data:/var/www/html
    environment:
      - MYSQL_HOST=nextcloud_db
      - MYSQL_DATABASE=$NEXTCLOUD_MYSQL_DATABASE
      - MYSQL_USER=$NEXTCLOUD_MYSQL_USER
      - MYSQL_PASSWORD=$NEXTCLOUD_MYSQL_PASSWORD
    networks:
      - hosts
```

**Fichier [.env](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Fichier%20de%20Configuration/.env) pour les variables d'environnement**
```
NEXTCLOUD_MYSQL_DATABASE=nextcloud
NEXTCLOUD_MYSQL_USER=nextcloud
NEXTCLOUD_MYSQL_ROOT_PASSWORD=root_mysql_password
NEXTCLOUD_MYSQL_PASSWORD=nextcloud_password
```

**Interface NextCloud**

![WebInterfaceNextCloud](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Capture%20Ecran/WebInterfaceNextCloud.png)

### 7 : Mise en place de l'exporter NextCloud

**Container nextcloud-exporter**
```
  nextcloud-exporter:
    image: xperimental/nextcloud-exporter:latest
    ports:
      - 9205:9205
    command: --server http://127.0.0.1:8080 --username admin --password password
    networks:
      - hosts
```

**Ajout de nextcloud-exporter dans [prometheus.yml](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Fichier%20de%20Configuration/prometheus/prometheus.yml)**
```
scrape_configs:
  - job_name: 'nextcloud-exporter'
    static_configs:
      - targets: ['nextcloud-exporter:9205']
```
![TargetNextCloudExporter](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Capture%20Ecran/TargetNextCloudExporter.png)


### BONUS : Mise en place de la découverte automatique de vos conteneurs

**Ajout de sd_docker dans [prometheus.yml](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Fichier%20de%20Configuration/prometheus/prometheus.yml)**
```
scrape_configs:
  - job_name: 'docker_sd'
    docker_sd_configs:
      - host: tcp://host.docker.internal:2375
```
![docker_sd](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Prometheus/Capture%20Ecran/docker_sd.png)


## Nagios

### 1 & 2 : Installez Nagios et les plugins

Nagios Core a été installé sur un serveur Ubuntu 20.04

![Voir l'interface web](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Capture%20Ecran/NagiosCore.png)

### 4 : check_ping local avec Warning à 20ms et Critical à 30% :

```
cd /usr/local/nagios/libexec/
```

```
./check_ping -H 192.168.116.129 -w 20,20% -c 30,30%
PING OK -  Paquets perdus = 0%, RTA = 0.03 ms|rta=0.025000ms;20.000000;30.000000;0.000000 pl=0%;20;30;0
```

### 5 : check_ping sur https://duckduckgo.com avec Warning à 10ms et Critical à 20%

```
cd /usr/local/nagios/libexec/
```

```
./check_ping -H duckduckgo.com -w 10,10% -c 20,20%
PING CRITICAL -  Paquets perdus = 100%|rta=20.000000ms;10.000000;20.000000;0.000000 pl=100%;10;20;0
```

*NB : Pas possible à partir de n'importe nom de domaine*

### 6 : check_http sur le serveur Nagios

```
cd /usr/local/nagios/libexec/
```

```
./check_http -H 192.168.116.134 -w 1 -c 2 -u /nagios/ -a nagiosadmin:password -p 80
HTTP OK: HTTP/1.1 200 OK - 1251 octets en 0,001 secondes de temps de réponse |time=0,000727s;1,000000;2,000000;0,000000 size=1251B;;;0
```

### 7 : Supervisez son serveur nagios en créant un fichier "serveur_nagios.cfg"

- Création de la commande dans [commands.cfg](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Fichiers%20de%20Configuration/objects/commands.cfg)
```
define command {

    command_name    check-http-webinterface
    command_line    $USER1$/check_http -H $HOSTADDRESS$ -w $ARG1$ -c $ARG2$ -u $ARG3$ -a $ARG4$ -p 80
}
```

- Création du fichier de configuration [serveur_nagios.cfg](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Fichiers%20de%20Configuration/objects/serveur_nagios.cfg)

- Déclaration du fichier dans [nagios.cfg](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Fichiers%20de%20Configuration/nagios.cfg)
```
cfg_file=/usr/local/nagios/etc/objects/serveur_nagios.cfg
```

### 8 : Vérifier le bon fonctionnement sur l'interface web
![Hotes](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Capture%20Ecran/Hosts.png)
![Services](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Capture%20Ecran/Services.png)

### BONUS : Superviser une VM Linux avec NRPE

#### Coté Client

Une VM clients linux a été mise en place pour ce TP (Ubuntu Server 20.04)

La procédure suivante a été suivi afin d'installer NRPE sur le client

[Procédure NRPE](https://support.nagios.com/kb/article/nrpe-how-to-install-nrpe-v4-from-source-515.html)

#### Coté Serveur

- Création du fichier de configuration [linux-client.cfg](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Fichiers%20de%20Configuration/objects/linux-client.cfg)

- Déclaration du fichier dans [nagios.cfg](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Fichiers%20de%20Configuration/nagios.cfg)
```
cfg_file=/usr/local/nagios/etc/objects/linux-client.cfg
```

- Vérification sur l'interface web
![Hotes](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Capture%20Ecran/HostsBonus.png)
![Services](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Capture%20Ecran/ServicesBonus.png)

On peut voir qu'un nouvel hote est apparu (linux-client) et que plusieurs services sont associés à celui-ci