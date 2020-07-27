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

    const [pizzaSizeSmallOptionSet] = await knex(tablenames.optionSet).insert({name: 'Pizza Size: Small', [tableNameReferences.choice]: 3, [tableNameReferences.option]: 13}).returning('*');
    console.log('Option Set Created', pizzaSizeSmallOptionSet);
    const [pizzaSizeMediumOptionSet] = await knex(tablenames.optionSet).insert({name: 'Pizza Size: Medium', [tableNameReferences.choice]: 3, [tableNameReferences.option]: 14}).returning('*');
    console.log('Option Set Created', pizzaSizeMediumOptionSet);
    const [pizzaSizeLargeOptionSet] = await knex(tablenames.optionSet).insert({name: 'Pizza Size: Large', [tableNameReferences.choice]: 3, [tableNameReferences.option]: 15}).returning('*');
    console.log('Option Set Created', pizzaSizeLargeOptionSet);

    const [binarySizeSmallOptionSet] = await knex(tableNames.optionSet).insert({name: 'Binary Size: Small', [tableNameReferences.choice]: 4, [tableNameReferences.option]: 13}).returning('*');
    console.log('Option Set Created', binarySizeSmallOptionSet);
    const [binarySizeLargeOptionSet] = await knex(tableNames.optionSet).insert({name: 'Binary Size: Large', [tableNameReferences.choice]: 4, [tableNameReferences.option]: 15}).returning('*');
    console.log('Option Set Created', binarySizeLargeOptionSet);

    const [cupSizeTwoOunceOptionSet] = await knex(tableNames.optionSet).insert({name: 'Cup Size: 2 oz', [tableNameReferences.choice]: 5, [tableNameReferences.option]: 16}).returning('*');
    console.log('Option Set Created', cupSizeTwoOunceOptionSet);
    const [cupSizeSixOunceOptionSet] = await knex(tableNames.optionSet).insert({name: 'Cup Size: 6 oz', [tableNameReferences.choice]: 5, [tableNameReferences.option]: 17}).returning('*');
    console.log('Option Set Created', cupSizeSixOunceOptionSet);

    const [savoryDippingSauceRanchOptionSet] = await knex(tableNames.optionSet).insert({name: 'Savory Dipping Sauce: Ranch', [tableNameReferences.choice]: 6, [tablenameReferences.option]: 7}).returning('*');
    console.log('Option Set Created', savoryDippingSauceRanchOptionSet);
    const [savoryDippingSauceMarinaraOptionSet] = await knex(tableNames.optionSet).insert({name: 'Savory Dipping Sauce: Marinara', [tableNameReferences.choice]: 6, [tablenameReferences.option]: 4}).returning('*');
    console.log('Option Set Created', savoryDippingSauceMarinaraOptionSet);
    const [savoryDippingSauceBBQOptionSet] = await knex(tableNames.optionSet).insert({name: 'Savory Dipping Sauce: BBQ', [tableNameReferences.choice]: 6, [tablenameReferences.option]: 6}).returning('*');
    console.log('Option Set Created', savoryDippingSauceBBQOptionSet);

    const [sweetDippingSauceIcingOptionSet] = await knex(tableNames.optionSet).insert({name: 'Sweet Dipping Sauce: Icing', [tableNameReferences.choice]: 7, [tablenameReferences.option]: 11}).returning('*');
    console.log('Option Set Created', sweetDippingSauceIcingOptionSet);
    const [sweetDippingSauceDulceDeLecheOptionSet] = await knex(tableNames.optionSet).insert({name: 'Sweet Dipping Sauce: Dulce De Leche', [tableNameReferences.choice]: 7, [tablenameReferences.option]: 12}).returning('*');
    console.log('Option Set Created', sweetDippingSauceDulceDeLecheOptionSet);

    const [dressingRanchOptionSet] = await knex(tableNames.optionSet).insert({name: 'Dressing: Ranch', [tableNameReferences.choice]: 8, [tableNameReferences.option]: 7}).returning('*');
    console.log('Option Set Created', dressingRanchOptionSet);
    const [dressingGreekOptionSet] = await knex(tableNames.optionSet).insert({name: 'Dressing: Greek', [tableNameReferences.choice]: 8, [tableNameReferences.option]: 8}).returning('*');
    console.log('Option Set Created', dressingGreekOptionSet);
    const [dressingBalsamicOptionSet] = await knex(tableNames.optionSet).insert({name: 'Dressing: Balsamic', [tableNameReferences.choice]: 8, [tableNameReferences.option]: 9}).returning('*');
    console.log('Option Set Created', dressingBalsamicOptionSet);
    const [dressingCaesarOptionSet] = await knex(tableNames.optionSet).insert({name: 'Dressing: Caesar', [tableNameReferences.choice]: 8, [tableNameReferences.option]: 10}).returning('*');
    console.log('Option Set Created', dressingCaesarOptionSet);

    const [typeRegularOptionSet] = await knex(tableNames.optionSet).insert({name: 'Type: Regular', [tableNameReferences.choice]: 9, [tableNameReferences.option]: 18}).returning('*');
    console.log('Option Set Created', typeRegularOptionSet);
    const [typeVeganOptionSet] = await knex(tableNames.optionSet).insert({name: 'Type: Vegan', [tableNameReferences.choice]: 9, [tableNameReferences.option]: 19}).returning('*');
    console.log('Option Set Created', typeRegularOptionSet);
    const [typeGlutenFreeOptionSet] = await knex(tableNames.optionSet).insert({name: 'Type: Gluten Free', [tableNameReferences.choice]: 9, [tableNameReferences.option]: 20}).returning('*');
    console.log('Option Set Created', typeRegularOptionSet);
}