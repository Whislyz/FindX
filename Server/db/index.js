const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  port: 5432,
  database: 'maths',
});

client.connect( (err) => {
  if (err) {
    console.log('Err from connecting to postgreSQL', err);
  } else {
    console.log('Connecting to postgreSQL local database PORT:5432');
  };
});

module.exports.client = client;