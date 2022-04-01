# TPs Final Monitoring Prometheus / Nagios

## Sommaire

- [Prometheus & Grafana](#prometheus--grafana)
- [Nagios](#nagios)

---
## Prometheus & Grafana

## Nagios

### 1 & 2 : Installez Nagios et les plugins

Nagios Core a été installé sur un serveur Ubuntu 20.04

![Voir l'interface web](https://github.com/KooKaik/Nagios/blob/master/Capture%20Ecran/NagiosCore.png)

### 4 : check_ping local avec Warning à 20ms et Critical à 30% :

```
cd /usr/local/nagios/libexec/
```

```
./check_ping -H 192.168.116.129 -w 20,20% -c 30,30%
PING OK -  
```

### 5 : check_ping sur https://duckduckgo.com avec Warning à 10ms et Critical à 20%

```
cd /usr/local/nagios/libexec/
```

```
./check_ping -H duckduckgo.com -w 5,10% -c 20,30%

```

### 6 : check_http sur le serveur Nagios



### 7 : Supervisez son serveur nagios en créant un fichier "serveur_nagios.cfg"


### 8 : Vérifier le bon fonctionnement sur l'interface web


### BONUS : Superviser une VM Linux avec NRPE