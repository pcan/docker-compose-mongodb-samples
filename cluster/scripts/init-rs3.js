rs.initiate(
   {
      _id: "shard3_rs",
      version: 1,
      members: [
         { _id: 0, host : "mongo_shard3a:27017", priority: 1 },
         { _id: 1, host : "mongo_shard3b:27017", priority: 2 },
         { _id: 2, host : "mongo_shard3c:27017", priority: 3 }
      ]
   }
)

