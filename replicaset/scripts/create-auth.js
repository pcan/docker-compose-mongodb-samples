

use admin;

db.createUser(
  {
    user: "root",
    pwd: "rootpassword",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);