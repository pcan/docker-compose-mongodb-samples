rs.initiate(
   {
      _id: "mongo_rs",
      version: 1,
      members: [
         { _id: 0, host : "mongo_replica1:27017", priority: 1 },
         { _id: 1, host : "mongo_replica2:27018", priority: 0.1 },
         { _id: 2, host : "mongo_replica3:27019", priority: 0.1 }
      ]
   }
);

