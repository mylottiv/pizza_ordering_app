// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {


    const [cheeseTopping] = await knex(tableNames.topping).insert({name: 'Cheese', [tableNameReferences.toppingSet]: 1}).returning('*');
    console.log('Topping Created', cheeseTopping);
    const [mozzarellaIngredient] = await knex(tableNames.ingredient).insert({name: 'Mozzarella', [tableNameReferences.topping]: 1}).returning('*');
    console.log('Ingredient Created', mozzarellaIngredient);
    const [cheddarIngredient] = await knex(tableNames.ingredient).insert({name: 'Cheddar', [tableNameReferences.topping]: 1}).returning('*');
    console.log('Ingredient Created', cheddarIngredient);
    const [fetaIngredient] = await knex(tableNames.ingredient).insert({name: 'Feta', [tableNameReferences.topping]: 1}).returning('*');
    console.log('Ingredient Created', fetaIngredient);

    const [meatTopping] = await knex(tableNames.topping).insert({name: "Meat", [tableNameReferences.toppingSet]: 1}).returning('*');
    console.log('Topping Created', meatTopping);
    const [pepperoniIngredient] = await knex(tableNames.ingredient).insert({name: 'Pepperoni', [tableNameReferences.topping]: 2}).returning('*');
    console.log('Ingredient Created', pepperoniIngredient);
    const [hamIngredient] = await knex(tableNames.ingredient).insert({name: 'Ham', [tableNameReferences.topping]: 2}).returning('*');
    console.log('Ingredient Created', hamIngredient);
    const [beefIngredient] = await knex(tableNames.ingredient).insert({name: 'Beef', [tableNameReferences.topping]: 2}).returning('*');
    console.log('Ingredient Created', beefIngredient);

    const [testDefaultIngredient] = await knex(tableNames.default_ingredients).insert({name: 'test_join', selected: true, [tableNameReferences.product]: 1, [tableNameReferences.ingredient]: 1}).returning('*');
    console.log('Test Default Ingredient', testDefaultIngredient);
}