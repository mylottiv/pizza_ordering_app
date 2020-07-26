// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {

    const [pizzaCategory] = await knex(tableNames.category).insert({name: 'Pizza', [tableNameReferences.menu]: 1}).returning('*');
    console.log('Category Created', pizzaCategory);
    const [buildYourOwnSubCategory] = await knex(tableNames.subcategory).insert({name: 'BYOP', [tableNameReferences.category]: 1}).returning('*');
    console.log('SubCategory Created', buildYourOwnSubCategory);
    const [specialtySubCategory] = await knex(tableNames.subcategory).insert({name: 'Specialty', [tableNameReferences.category]: 1}).returning('*');
    console.log('SubCategory Created', specialtySubCategory);

    const [sidesCategory] = await knex(tableNames.category).insert({name: 'Sides', [tableNameReferences.menu]: 1}).returning('*');
    console.log('Category Created', sidesCategory);
    const [appetizerSubCategory] = await knex(tableNames.subcategory).insert({name: 'Appetizers', [tableNameReferences.category]: 2}).returning('*');
    console.log('SubCategory Created', appetizerSubCategory);
    const [sauceSubCategory] = await knex(tableNames.subcategory).insert({name: 'Sauces', [tableNameReferences.category]: 2}).returning('*');
    console.log('SubCategory Created', sauceSubCategory);

    const [saladsCategory] = await knex(tableNames.category).insert({name: 'Salads', [tableNameReferences.menu]: 1}).returning('*');
    console.log('Category Created', saladsCategory);
    const [vegetarianSubCategory] = await knex(tableNames.subcategory).insert({name: 'Vegetarian', [tableNameReferences.category]: 3}).returning('*');
    console.log('SubCategory Created', vegetarianSubCategory);
    const [veganSubCategory] = await knex(tableNames.subcategory).insert({name: 'Vegan', [tableNameReferences.category]: 3}).returning('*');
    console.log('SubCategory Created', veganSubCategory);

    const [dessertsCategory] = await knex(tableNames.category).insert({name: 'Desserts', [tableNameReferences.menu]: 1}).returning('*');
    console.log('Category Created', dessertsCategory);
    const [premadeSubCategory] = await knex(tableNames.subcategory).insert({name: 'Premade', [tableNameReferences.category]: 4}).returning('*');
    console.log('SubCategory Created', premadeSubCategory);
    const [dessertPizzaSubCategory] = await knex(tableNames.subcategory).insert({name: 'Dessert Pizzas', [tableNameReferences.category]: 4}).returning('*');
    console.log('SubCategory Created', dessertPizzaSubCategory);    
}