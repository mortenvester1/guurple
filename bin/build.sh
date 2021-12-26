#!/bin/bash
source .env
DOCKER_BUILDKIT=1

if [[ -z ${2} ]]
then
    TARGET='dev'
    TAG='dev-latest'
else
    TARGET=${2}
    TAG='latest'
fi

echo "building image for vjs-${1}..."
echo "target: ${2}"
if [[ $1 = "api" ]];
then
    docker build --tag vjs-api:${TAG}\
        --build-arg DB_NAME=${DB_NAME}\
        --build-arg DB_USER=${DB_USER}\
        --build-arg DB_PASSWORD=${DB_PASSWORD}\
        --build-arg VJS_API_PORT=${VJS_API_PORT}\
        --build-arg VJS_MONGO_PORT=${VJS_MONGO_PORT}\
        --target ${TARGET}\
        vjs-api

elif [[ $1 = "frontend" ]];
then
    docker build --tag vjs-frontend:${TAG}\
        --build-arg VJS_FRONTEND_PORT=${VJS_FRONTEND_PORT}\
        --build-arg VJS_API_PORT=${VJS_API_PORT}\
        --target ${TARGET}\
        vjs-frontend

elif [[ $1 = "mongo" ]];
then
    echo "target ${2} is ignored for mongo"
    docker build --tag vjs-mongo:${TAG}\
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
