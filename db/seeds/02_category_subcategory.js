// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {
    const [pizzaCategory] = await knex(tableNames.category).insert({name: 'Pizza', [tableNameReferences.menu]: 1, [tableNameReferences.choiceSet]: 1}).returning('*');
    console.log('Category Created', pizzaCategory);
    const [buildYourOwnSubCategory] = await knex(tableNames.subcategory).insert({name: 'BYOP', [tableNameReferences.category]: 1, [tableNameReferences.toppingSet]: 1}).returning('*');
    console.log('SubCategory Created', buildYourOwnSubCategory);
    const [specialtySubCategory] = await knex(tableNames.subcategory).insert({name: 'Specialty', [tableNameReferences.category]: 1, [tableNameReferences.toppingSet]: 1}).returning('*');
    console.log('SubCategory Created', specialtySubCategory);
}