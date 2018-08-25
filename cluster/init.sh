#!/bin/bash

docker-compose exec mongo_config sh -c "mongo --port 27017 < /scripts/init-configserver.js"

docker-compose exec mongo_shard1a sh -c "mongo --port 27017 < /scripts/init-rs1.js"
docker-compose exec mongo_shard2a sh -c "mongo --port 27017 < /scripts/init-rs2.js"
docker-compose exec mongo_shard3a sh -c "mongo --port 27017 < /scripts/init-rs3.js"

sleep 10
docker-compose exec mongo_router sh -c "mongo --port 27017 < /scripts/init-router.js"
