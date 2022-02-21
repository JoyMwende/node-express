const mssql = require('mssql')
const dotenv = require("dotenv")
dotenv.config()


let config = {
    server: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    multipleStatements: true,
    port: 1433,
    pool:{
        max: 20,
        min: 0,
        idleTimeoutMillis: 3600
    },
    options: {
        encrypt: false,
    }
  }

  mssql.connect(config).then(pool => {
      if(pool.connecting){
        console.log(" DB Connecting!");
      }
      if(pool.connected){
          console.log("connected");
      }
      
  }).catch(e => console.log(e))