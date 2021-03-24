const env=require('dotenv')
env.config()
module.exports = {

  development: {
    client: 'mysql',
      connection: { 
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port:process.env.DB_PORT,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      },
      migrations: {
      directory: './db/migrations'
      },
      seeds: {
      directory: './db/seeds'
      }
  }
};
