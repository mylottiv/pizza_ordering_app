// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');
const tablenameReferences = require('../../constants/tablenameReferences');
const tablenames = require('../../constants/tablenames');

exports.seed = async (knex) => {

    const [handTossedOption] = await knex(tableNames.option).insert({name: 'Hand Tossed'}).returning('*');
    console.log('Option Created', handTossedOption);
    const [panOption] = await knex(tableNames.option).insert({name: 'Pan'}).returning('*');
    console.log('Option Created', panOption);
    const [thinOption] = await knex(tableNames.option).insert({name: 'Thin Crust'}).returning('*');
    console.log('Option Created', thinOption);

    const [marinaraOption] = await knex(tableNames.option).insert({name: 'Marinara'}).returning('*');
    console.log('Option Created', marinaraOption);
    const [alfredoOption] = await knex(tableNames.option).insert({name: 'Alfredo'}).returning('*');
    console.log('Option Created', alfredoOption);
    const [bbqOption] = await knex(tableNames.option).insert({name: 'BBQ Sauce'}).returning('*');
    console.log('Option Created', bbqOption);
    const [ranchOption] = await knex(tableNames.option).insert({name: 'Ranch'}).returning('*');
    console.log('Option Created', ranchOption);
    const [greekOption] = await knex(tableNames.option).insert({name: 'Greek'}).returning('*');
    console.log('Option Created', greekOption);
    const [balsamicOption] = await knex(tableNames.option).insert({name: 'Balsamic'}).returning('*');
    console.log('Option Created', balsamicOption);
    const [caesarOption] = await knex(tableNames.option).insert({name: 'Caesar'}).returning('*');
    console.log('Option Created', caesarOption);
    const [icingOption] = await knex(tableNames.option).insert({name: 'Icing'}).returning('*');
    console.log('Option Created', icingOption);
    const [dulceDeLeceOption] = await knex(tableNames.option).insert({name: 'Dulce De Lece'}).returning('*');
    console.log('Option Created', dulceDeLeceOption);

    const [smallOption] = await knex(tableNames.option).insert({name: 'Small'}).returning('*');
    console.log('Option Created', smallOption);
    const [mediumOption] = await knex(tableNames.option).insert({name: 'Medium'}).returning('*');
    console.log('Option Created', mediumOption);
    const [largeOption] = await knex(tableNames.option).insert({name: 'Large'}).returning('*');
    console.log('Option Created', largeOption);
    const [twoOunceOption] = await knex(tableNames.option).insert({name: '2 oz'}).returning('*');
    console.log('Option Created', twoOunceOption);
    const [sixOunceOption] = await knex(tableNames.option).insert({name: '6 oz'}).returning('*');
    console.log('Option Created', sixOunceOption);

    const [regularTypeOption] = await knex(tableNames.option).insert({name: 'Regular'}).returning('*');
    console.log('Option Created', regularTypeOption);
    const [veganTypeOption] = await knex(tableNames.option).insert({name: 'Vegan'}).returning('*');
    console.log('Option Created', veganTypeOption);
    const [glutenFreeTypeOption] = await knex(tableNames.option).insert({name: 'Gluten Free'}).returning('*');
    console.log('Option Created', glutenFreeTypeOption);

    const [testDefaultOption] = await knex(tableNames.default_options).insert({name: 'test_option', [tableNameReferences.product]: 1, [tableNameReferences.option]: 1}).returning('*');
    console.log('Test Default Option', testDefaultOption);
}