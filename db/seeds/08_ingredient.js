// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {

    const [mozzarellaIngredient] = await knex(tableNames.ingredient).insert({name: 'Mozzarella'}).returning('*');
    console.log('Ingredient Created', mozzarellaIngredient);
    const [cheddarIngredient] = await knex(tableNames.ingredient).insert({name: 'Cheddar'}).returning('*');
    console.log('Ingredient Created', cheddarIngredient);
    const [fetaIngredient] = await knex(tableNames.ingredient).insert({name: 'Feta'}).returning('*');
    console.log('Ingredient Created', fetaIngredient);

    const [pepperoniIngredient] = await knex(tableNames.ingredient).insert({name: 'Pepperoni'}).returning('*');
    console.log('Ingredient Created', pepperoniIngredient);
    const [hamIngredient] = await knex(tableNames.ingredient).insert({name: 'Ham'}).returning('*');
    console.log('Ingredient Created', hamIngredient);
    const [beefIngredient] = await knex(tableNames.ingredient).insert({name: 'Beef'}).returning('*');
    console.log('Ingredient Created', beefIngredient);

    const [oliveIngredient] = await knex(tableNames.ingredient).insert({name: 'Olives'}).returning('*');
    console.log('Ingredient Created', oliveIngredient);
    const [onionIngredient] = await knex(tableNames.ingredient).insert({name: 'Onions'}).returning('*');
    console.log('Ingredient Created', onionIngredient);
    const [pineappleIngredient] = await knex(tableNames.ingredient).insert({name: 'Pineapple'}).returning('*');
    console.log('Ingredient Created', pineappleIngredient);

    const [testDefaultIngredient] = await knex(tableNames.default_ingredients).insert({name: 'test_join', [tableNameReferences.product]: 1, [tableNameReferences.ingredient]: 1}).returning('*');
    console.log('Test Default Ingredient', testDefaultIngredient);
}