// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');
const tablenameReferences = require('../../constants/tablenameReferences');
const tablenames = require('../../constants/tablenames');

exports.seed = async (knex) => {

    const [crustHandTossedOptionSet] = await knex(tableNames.optionSet).insert({name: 'Crust: Hand Tossed', [tableNameReferences.choice]: 1, [tablenameReferences.option]: 1}).returning('*');
    console.log('Option Set Created', crustHandTossedOptionSet);
    const [crustPanOptionSet] = await knex(tableNames.optionSet).insert({name: 'Crust: Pan', [tableNameReferences.choice]: 1, [tablenameReferences.option]: 2}).returning('*');
    console.log('Option Set Created', crustPanOptionSet);
    const [crustThinOptionSet] = await knex(tableNames.optionSet).insert({name: 'Crust: Thin', [tableNameReferences.choice]: 1, [tablenameReferences.option]: 3}).returning('*');
    console.log('Option Set Created', crustThinOptionSet);

    const [pizzaSauceMarinaraOptionSet] = await knex(tableNames.optionSet).insert({name: 'Pizza Sauce: Marinara', [tableNameReferences.choice]: 2, [tableNameReferences.option]: 4}).returning('*');
    console.log('Option Set Created', pizzaSauceMarinaraOptionSet);
    const [pizzaSauceAlfredoOptionSet] = await knex(tableNames.optionSet).insert({name: 'Pizza Sauce: Alfredo', [tableNameReferences.choice]: 2, [tableNameReferences.option]: 5}).returning('*');
    console.log('Option Set Created', pizzaSauceAlfredoOptionSet);
    const [pizzaSauceBBQOptionSet] = await knex(tableNames.optionSet).insert({name: 'Pizza Sauce: BBQ', [tableNameReferences.choice]: 2, [tableNameReferences.option]: 6}).returning('*');
    console.log('Option Set Created', pizzaSauceBBQOptionSet);

    const [pizzaSizeSmallOptionSet] = await knex(tablenames.optionSet).insert({name: 'Pizza Size: Small', [tableNameReferences.choice]: 3, [tableNameReferences.option]: 7}).returning('*');
    console.log('Option Set Created', pizzaSizeSmallOptionSet);
    const [pizzaSizeMediumOptionSet] = await knex(tablenames.optionSet).insert({name: 'Pizza Size: Medium', [tableNameReferences.choice]: 3, [tableNameReferences.option]: 8}).returning('*');
    console.log('Option Set Created', pizzaSizeMediumOptionSet);
    const [pizzaSizeLargeOptionSet] = await knex(tablenames.optionSet).insert({name: 'Pizza Size: Large', [tableNameReferences.choice]: 3, [tableNameReferences.option]: 9}).returning('*');
    console.log('Option Set Created', pizzaSizeLargeOptionSet);

    const [testDefaultOption] = await knex(tableNames.default_options).insert({name: 'test_option', [tableNameReferences.product]: 1, [tableNameReferences.option]: 1}).returning('*');
    console.log('Test Default Option', testDefaultOption);
}