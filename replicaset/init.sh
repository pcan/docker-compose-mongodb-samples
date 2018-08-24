#!/bin/bash

docker-compose exec mongo_replica1 sh -c "mongo --port 27017 < /scripts/init-replicas.js"
