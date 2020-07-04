// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const orderedTableNames = require('../../constants/orderedtablenames');
const tableNames = require('../../constants/tablenames');

exports.seed = async (knex) => {
  await orderedTableNames
    .reduce(async (promise, table_name) => {
      await promise;
      console.log('Clearing', table_name);
      await knex(table_name).del();
      return await knex.raw('TRUNCATE TABLE ' + table_name + ' RESTART IDENTITY CASCADE');
    }, Promise.resolve());
  
  const user = {
    email: 'test@test.null',
    name: 'test_user',
    address: 'here',
    password: 'pass'
  };

  const [createdUser] = await knex(tableNames.user).insert(user).returning('*');
  console.log('User Created:', createdUser);
};
