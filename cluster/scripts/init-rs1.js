rs.initiate(
   {
      _id: "shard1_rs",
      version: 1,
      members: [
         { _id: 0, host : "mongo_shard1a:27017", priority: 1 },
         { _id: 1, host : "mongo_shard1b:27017", priority: 2 },
         { _id: 2, host : "mongo_shard1c:27017", priority: 3 }
      ]
   }
)

