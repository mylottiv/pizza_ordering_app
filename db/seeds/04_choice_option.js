// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {


    const [crustChoice] = await knex(tableNames.choice).insert({name: 'Crust', [tableNameReferences.choiceSet]: 1}).returning('*');
    console.log('Choice Created', crustChoice);
    const [handTossedOption] = await knex(tableNames.option).insert({name: 'Hand Tossed', [tableNameReferences.choice]: 1}).returning('*');
    console.log('Option Created', handTossedOption);
    const [panOption] = await knex(tableNames.option).insert({name: 'Pan', [tableNameReferences.choice]: 1}).returning('*');
    console.log('Option Created', panOption);
    const [thinOption] = await knex(tableNames.option).insert({name: 'Thin Crust', [tableNameReferences.choice]: 1}).returning('*');
    console.log('Option Created', thinOption);

    const [sauceChoice] = await knex(tableNames.choice).insert({name: 'Sauce', [tableNameReferences.choiceSet]: 1}).returning('*');
    console.log('Choice Created', sauceChoice);
    const [marinaraOption] = await knex(tableNames.option).insert({name: 'Marinara', [tableNameReferences.choice]: 2}).returning('*');
    console.log('Option Created', marinaraOption);
    const [alfredoOption] = await knex(tableNames.option).insert({name: 'Alfredo', [tableNameReferences.choice]: 2}).returning('*');
    console.log('Option Created', alfredoOption);
    const [bbqOption] = await knex(tableNames.option).insert({name: 'BBQ Sauce', [tableNameReferences.choice]: 2}).returning('*');
    console.log('Option Created', bbqOption);

    const [sizeChoice] = await knex(tableNames.choice).insert({name: "Size", [tableNameReferences.choiceSet]: 1}).returning('*');
    console.log('Choice Created', sizeChoice);
    const [smallOption] = await knex(tableNames.option).insert({name: 'Small', [tableNameReferences.choice]: 3}).returning('*');
    console.log('Option Created', smallOption);
    const [mediumOption] = await knex(tableNames.option).insert({name: 'Medium', [tableNameReferences.choice]: 3}).returning('*');
    console.log('Option Created', mediumOption);
    const [largeOption] = await knex(tableNames.option).insert({name: 'Large', [tableNameReferences.choice]: 3}).returning('*');
    console.log('Option Created', largeOption);

    const [testDefaultOption] = await knex(tableNames.default_options).insert({name: 'test_option', [tableNameReferences.product]: 1, [tableNameReferences.option]: 1}).returning('*');
    console.log('Test Default Option', testDefaultOption);
}