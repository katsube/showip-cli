# Showip-CLI
A command line tool to display the current global IP address.

## INDEX
1. [Installation](#installation)
1. [Usage](#usage)
1. [Options](#options)
    1. [-s, --service](#-s---service)

## Installation
```shellsession
$ npm install -g showip-cli
```

## Usage
```shellsession
$ showip
203.0.113.1
```

## Options
### -s, --service
You can select the service you want to use.

```shellsession
$ showip -s aws
203.0.113.1
```

| service_cd | default | URL |
| ---------- | ------- | ------------------ |
| aws        | ✔       | https://checkip.amazonaws.com |
| google     |         | https://domains.google.com/checkip |
| ifconfigio |         | https://ifconfig.io/ip |
| ifconfigme |         | https://ifconfig.me/ip |
| ipaddrshow |         | http://ipaddr.show/ |


## License
The MIT License.