#!/bin/bash
source .env
DOCKER_BUILDKIT=1
echo "building ${1} ..."
if [[ $1 = "api" ]];
then
    docker build --tag vjs-api:dev-latest\
        --build-arg DB_NAME=${DB_NAME}\
        --build-arg DB_USER=${DB_USER}\
        --build-arg DB_PASSWORD=${DB_PASSWORD}\
        --build-arg VJS_API_PORT=${VJS_API_PORT}\
        --build-arg VJS_MONGO_PORT=${VJS_MONGO_PORT}\
        vjs-api

elif [[ $1 = "frontend" ]];
then
    docker build --tag vjs-frontend:dev-latest\
        --build-arg VJS_FRONTEND_PORT=${VJS_FRONTEND_PORT}\
        --build-arg VJS_API_PORT=${VJS_API_PORT}\
        vjs-frontend

elif [[ $1 = "mongo" ]];
then
    docker build --tag vjs-mongo:dev-latest\
        --build-arg MONGO_INITDB_ROOT_USERNAME=${MONGO_INITDB_ROOT_USERNAME}\
        --build-arg MONGO_INITDB_ROOT_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}\
        --build-arg DB_NAME=${DB_NAME}\
        --build-arg DB_USER=${DB_USER}\
        --build-arg DB_PASSWORD=${DB_PASSWORD}\
        vjs-mongo

else
    echo "cannot build ${1}. Does not exist!"
    exit 1
fi
exit 0
