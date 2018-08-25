rs.initiate(
   {
      _id: "shard2_rs",
      version: 1,
      members: [
         { _id: 0, host : "mongo_shard2a:27017", priority: 1 },
         { _id: 1, host : "mongo_shard2b:27017", priority: 2 },
         { _id: 2, host : "mongo_shard2c:27017", priority: 3 }
      ]
   }
)

