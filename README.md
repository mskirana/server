# Web Server for mskirana

## Getting started

1. Install docker and docker-compose.
2. Create an .env file

```sh
$ touch .env
$ cat <<EOF >> .env
SERVER_PORT=8080

MONGO_USERNAME=root
MONGO_PASSWORD=password
MONGO_DB=mskirana

MONGO_EXPRESS_USERNAME=root
MONGO_EXPRESS_PASSWORD=password
EOF
```

To start the development server,
```sh
$ docker-compose -f docker-compose.yaml -f dev.docker-compose.yaml up
```