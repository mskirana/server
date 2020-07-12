# Web Server for mskirana

![Deploy](https://github.com/mskirana/server/workflows/Deploy/badge.svg?branch=master)

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
MONGO_EXPRESS_PORT=8081
EOF
```

To start the development server,
```sh
$ docker-compose -f docker-compose.yaml -f dev.docker-compose.yaml up
```

Web server will be available at $SERVER_PORT and Mongo-Express will be available at $MONGO_EXPRESS_PORT