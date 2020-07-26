// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');
const tablenameReferences = require('../../constants/tablenameReferences');
const tablenames = require('../../constants/tablenames');

exports.seed = async (knex) => {


    // const [crustChoice] = await knex(tableNames.choice).insert({name: 'Pizza Crust', [tableNameReferences.fields]: 1}).returning('*');
    // console.log('Choice Created', crustChoice);
    const [handTossedOption] = await knex(tableNames.option).insert({name: 'Hand Tossed'}).returning('*');
    console.log('Option Created', handTossedOption);
    const [panOption] = await knex(tableNames.option).insert({name: 'Pan'}).returning('*');
    console.log('Option Created', panOption);
    const [thinOption] = await knex(tableNames.option).insert({name: 'Thin Crust'}).returning('*');
    console.log('Option Created', thinOption);

    // const [sauceChoice] = await knex(tableNames.choice).insert({name: 'Pizza Sauce', [tableNameReferences.fields]: 1}).returning('*');
    // console.log('Choice Created', sauceChoice);
    const [marinaraOption] = await knex(tableNames.option).insert({name: 'Marinara'}).returning('*');
    console.log('Option Created', marinaraOption);
    const [alfredoOption] = await knex(tableNames.option).insert({name: 'Alfredo'}).returning('*');
    console.log('Option Created', alfredoOption);
    const [bbqOption] = await knex(tableNames.option).insert({name: 'BBQ Sauce'}).returning('*');
    console.log('Option Created', bbqOption);

    // const [sizeChoice] = await knex(tableNames.choice).insert({name: "Pizza Size", [tableNameReferences.fields]: 1}).returning('*');
    // console.log('Choice Created', sizeChoice);
    const [smallOption] = await knex(tableNames.option).insert({name: 'Small'}).returning('*');
    console.log('Option Created', smallOption);
    const [mediumOption] = await knex(tableNames.option).insert({name: 'Medium'}).returning('*');
    console.log('Option Created', mediumOption);
    const [largeOption] = await knex(tableNames.option).insert({name: 'Large'}).returning('*');
    console.log('Option Created', largeOption);

    const [testDefaultOption] = await knex(tableNames.default_options).insert({name: 'test_option', [tableNameReferences.product]: 1, [tableNameReferences.option]: 1}).returning('*');
    console.log('Test Default Option', testDefaultOption);
}