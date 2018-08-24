# ReplicaSet configuration

This configuration creates three replica instances of MongoDB. Data is stored in the `./data_replica1`, `./data_replica2` and `./data_replica3` subfolders; The first replica listens on port `27017`, the second on port `27018` and the third on port `27019`. The `init-replicas.js` script sets a higher priority to the first replica, so you can test a failure and restoring the same primary after the restart.

## Usage

Run `docker-compose up -d`, then `./init.sh`.

If you stop the first replica with `docker-compose kill mongo_replica1` and then restart it with `docker-compose start mongo_replica1`, you will see this replica become the primary again.