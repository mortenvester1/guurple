#!/bin/bash
source .env

if [[ -z `docker network ls | grep ${NETWORK}` ]];
then
    echo "create docker network ${NETWORK}"
    docker network create ${NETWORK}
fi

if [[ $1 = "api" ]];
then
    docker run\
        --env DB_NAME=${DB_NAME}\
        --env DB_USER=${DB_USER}\
        --env DB_PASSWORD=${DB_PASSWORD}\
        --env VJS_MONGO_PORT=${VJS_MONGO_PORT}\
        --env VJS_API_PORT=${VJS_API_PORT}\
        --env VJS_MEDIA_DIR=/media\
        --publish ${VJS_API_PORT}:${VJS_API_PORT}\
        --mount type=bind,source=${SOURCE_DIR}/vjs-api,destination=/usr/src/app,ro\
        --mount type=bind,source=${VJS_MEDIA_DIR},destination=/media,ro\
        --network ${NETWORK}\
        --name vjs-api\
        --rm\
        vjs-api:dev-latest npm run dev
elif [[ $1 = "frontend" ]];
then
    docker run\
        --env REACT_APP_API_URL=http://localhost:${VJS_API_PORT}/api\
        --env PORT=${VJS_FRONTEND_PORT}\
        --publish ${VJS_FRONTEND_PORT}:${VJS_FRONTEND_PORT}\
        --mount type=bind,source=${SOURCE_DIR}/vjs-frontend,destination=/usr/src/app,ro\
        --network ${NETWORK}\
        --name vjs-frontend\
        --rm\
        vjs-frontend:dev-latest
elif [[ $1 = "mongo" ]];
then
    docker run\
        --env MONGO_INITDB_ROOT_USERNAME=${MONGO_INITDB_ROOT_USERNAME}\
        --env MONGO_INITDB_ROOT_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}\
        --env DB_NAME=${DB_NAME}\
        --env DB_USER=${DB_USER}\
        --env DB_PASSWORD=${DB_PASSWORD}\
        --publish ${VJS_MONGO_PORT}:${VJS_MONGO_PORT}\
        --mount type=bind,source=${VJS_DB_DIR},destination=/data/db\
        --network ${NETWORK}\
        --name vjs-mongo\
        --rm\
        vjs-mongo:dev-latest
else
    echo "cannot run ${1}. Does not exist!"
    exit 1
fi
exit 0
