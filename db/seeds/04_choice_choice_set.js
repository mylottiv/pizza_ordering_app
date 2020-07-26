// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {


    const [crustChoice] = await knex(tableNames.choice).insert({name: 'Crust'}).returning('*');
    console.log('Choice Created', crustChoice);
    const [pizzaCrustChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Crust', [tableNameReferences.fields]: 1, [tableNameReferences.choice]: 1}).returning('*');
    console.log('Choice Set Created', pizzaCrustChoiceSet);
    // const [handTossedOption] = await knex(tableNames.option).insert({name: 'Hand Tossed', [tableNameReferences.choice]: 1}).returning('*');
    // console.log('Option Created', handTossedOption);
    // const [panOption] = await knex(tableNames.option).insert({name: 'Pan', [tableNameReferences.choice]: 1}).returning('*');
    // console.log('Option Created', panOption);
    // const [thinOption] = await knex(tableNames.option).insert({name: 'Thin Crust', [tableNameReferences.choice]: 1}).returning('*');
    // console.log('Option Created', thinOption);

    const [sauceChoice] = await knex(tableNames.choice).insert({name: 'Sauce'}).returning('*');
    console.log('Choice Created', sauceChoice);
    const [pizzaSauceChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Sauce', [tableNameReferences.fields]: 1, [tableNameReferences.choice]: 2}).returning('*');
    console.log('Choice Set Created', pizzaSauceChoiceSet);
    // const [marinaraOption] = await knex(tableNames.option).insert({name: 'Marinara', [tableNameReferences.choice]: 2}).returning('*');
    // console.log('Option Created', marinaraOption);
    // const [alfredoOption] = await knex(tableNames.option).insert({name: 'Alfredo', [tableNameReferences.choice]: 2}).returning('*');
    // console.log('Option Created', alfredoOption);
    // const [bbqOption] = await knex(tableNames.option).insert({name: 'BBQ Sauce', [tableNameReferences.choice]: 2}).returning('*');
    // console.log('Option Created', bbqOption);

    const [sizeChoice] = await knex(tableNames.choice).insert({name: "Size"}).returning('*');
    console.log('Choice Created', sizeChoice);
    const [pizzaSizeChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Size', [tableNameReferences.fields]: 1, [tableNameReferences.choice]: 3}).returning('*');
    console.log('Choice Set Created', pizzaSizeChoiceSet);
    // const [smallOption] = await knex(tableNames.option).insert({name: 'Small Pizza', [tableNameReferences.choice]: 3}).returning('*');
    // console.log('Option Created', smallOption);
    // const [mediumOption] = await knex(tableNames.option).insert({name: 'Medium Pizza', [tableNameReferences.choice]: 3}).returning('*');
    // console.log('Option Created', mediumOption);
    // const [largeOption] = await knex(tableNames.option).insert({name: 'Large Pizza', [tableNameReferences.choice]: 3}).returning('*');
    // console.log('Option Created', largeOption);
}