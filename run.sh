#!/bin/bash

if [[ $1 -eq 'FE' ]]
then
    echo "starting frontend ${1}"
    docker run \
        -itd \
        -v ${PWD}:/usr/src/app \
        -p 3000:3000 \
        mortenvester1/vjs-frontend:dev
fi
