#!/bin/bash

docker-compose exec mongo_replica1 sh -c "mongo --port 27017 < /scripts/init-replicas.js"
echo "wait 30 seconds for authentication to be created"
sleep 30
docker-compose exec mongo_replica1 sh -c "mongo --port 27017 < /scripts/create-auth.js"