// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {


    const [crustChoice] = await knex(tableNames.choice).insert({name: 'Pizza Crust'}).returning('*');
    console.log('Choice Created', crustChoice);

    const [sauceChoice] = await knex(tableNames.choice).insert({name: 'Pizza Sauce'}).returning('*');
    console.log('Choice Created', sauceChoice);

    const [sizeChoice] = await knex(tableNames.choice).insert({name: "Pizza Size"}).returning('*');
    console.log('Choice Created', sizeChoice);

    const [binarySizeChoice] = await knex(tableNames.choice).insert({name: "Binary Size"}).returning('*');
    console.log('Choice Created', binarySizeChoice);

    const [cupSizeChoice] = await knex(tableNames.choice).insert({name: 'Cup Size'}).returning('*');
    console.log('Choice Created', cupSizeChoice);

    const [savoryDippingSauceChoice] = await knex(tableNames.choice).insert({name: 'Savory Dipping Sauce'}).returning('*');
    console.log('Choice Created', savoryDippingSauceChoice);

    const [sweetDippingSauceChoice] = await knex(tableNames.choice).insert({name: 'Sweet Dipping Sauce'}).returning('*');
    console.log('Choice Created', sweetDippingSauceChoice);

    const [dressingChoice] = await knex(tableNames.choice).insert({name: 'Dressing'}).returning('*');
    console.log('Choice Created', dressingChoice);

    const [premadeTypeChoice] = await knex(tableNames.choice).insert({name: 'Type'}).returning('*');
    console.log('Choice Created', premadeTypeChoice);


}