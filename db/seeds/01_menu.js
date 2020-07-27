// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');

exports.seed = async (knex) => {

    const [createdMenu] = await knex(tableNames.menu).insert({name: 'Normal Menu'}).returning('*');
    console.log('Menu Created', createdMenu);
    
    const [pizzaFields] = await knex(tableNames.fields).insert({name: 'Pizza Fields'}).returning('*');
    console.log('Field Set Created', pizzaFields);

    const [pizzaAppetizerFields] = await knex(tableNames.fields).insert({name: 'Pizza Appetizer Fields'}).returning('*');
    console.log('Field Set Created', pizzaAppetizerFields);

    const [nonPizzaAppetizerFields] = await knex(tableNames.fields).insert({name: 'Non-Pizza Appetizer Fields'}).returning('*');
    console.log('Field Set Created', nonPizzaAppetizerFields);

    const [sideSauceFields] = await knex(tableNames.fields).insert({name: 'Side Sauce Fields'}).returning('*');
    console.log('Field Set Created', sideSauceFields);

    const [saladFields] = await knex(tableNames.fields).insert({name: 'Salad Fields'}).returning('*');
    console.log('Field Set Created', saladFields);

    // const [veganSaladFields] = await knex(tableNames.fields).insert({name: 'Vegan Salad Fields'}).returning('*');
    // console.log('Field Set Created', veganSaladFields);

    const [premadeDessertFields] = await knex(tableNames.fields).insert({name: 'Premade Dessert Fields'}).returning('*');
    console.log('Field Set Created', premadeDessertFields);

    const [pizzaDessertFields] = await knex(tableNames.fields).insert({name: 'Pizza Dessert Fields'}).returning('*');
    console.log('Field Set Created', pizzaDessertFields);
};