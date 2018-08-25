#!/bin/bash

docker-compose exec mongo_config sh -c "mongo --port 27017 < /scripts/init-configserver.js"
sleep 10
docker-compose exec mongo_router sh -c "mongo --port 27017 < /scripts/init-router.js"
