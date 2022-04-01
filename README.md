# TPs Final Monitoring Prometheus / Nagios

## Sommaire

- [Prometheus & Grafana](#prometheus--grafana)
- [Nagios](#nagios)

---
## Prometheus & Grafana

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



### 7 : Supervisez son serveur nagios en créant un fichier "serveur_nagios.cfg"

- Création du fichier de configuration [serveur_nagios.cfg](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Fichiers%20de%20Configuration/objects/serveur_nagios.cfg)

- Déclaration du fichier dans [nagios.cfg](https://github.com/KooKaik/Rendu_Prometheus_Nagios/blob/master/Nagios/Fichiers%20de%20Configuration/nagios.cfg)
```
cfg_file=/usr/local/nagios/etc/objects/serveur_nagios.cfg
```

### 8 : Vérifier le bon fonctionnement sur l'interface web


### BONUS : Superviser une VM Linux avec NRPE