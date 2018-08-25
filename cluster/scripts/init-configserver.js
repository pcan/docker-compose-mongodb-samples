rs.initiate(
   {
      _id: "configsrv",
      configsvr: true,
      version: 1,
      members: [
         { _id: 0, host : "mongo_config:27017" }
      ]
   }
)
