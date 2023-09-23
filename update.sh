#!/bin/bash

git pull
docker stop onlyfox
docker rm onlyfox
docker rmi onlyfox
docker build -t onlyfox .
docker run -d -t -i --name=onlyfox --restart=always --memory=256m --memory-reservation=128m -p 443:8000 --add-host host.docker.internal:host-gateway onlyfox