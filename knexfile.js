// Update with your config settings.
const {join} = require('path');

const migrateDir = join(__dirname, 'db/migrations');

console.log(migrateDir);

const config = {
  development: {
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'root',
        database : 'pizza_ordering_app_test',
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  useNullAsDefault: true,
};

module.exports = config;