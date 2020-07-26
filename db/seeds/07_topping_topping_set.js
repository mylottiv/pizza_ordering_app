// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {


    const [cheeseTopping] = await knex(tableNames.topping).insert({name: 'Cheese'}).returning('*');
    console.log('Topping Created', cheeseTopping);
    const [pizzaCheeseToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Pizza Cheese', [tableNameReferences.fields]: 1, [tableNameReferences.topping]: 1}).returning('*');
    console.log('Topping Set Created', pizzaCheeseToppingSet);
    // const [mozzarellaIngredient] = await knex(tableNames.ingredient).insert({name: 'Mozzarella', [tableNameReferences.topping]: 1}).returning('*');
    // console.log('Ingredient Created', mozzarellaIngredient);
    // const [cheddarIngredient] = await knex(tableNames.ingredient).insert({name: 'Cheddar', [tableNameReferences.topping]: 1}).returning('*');
    // console.log('Ingredient Created', cheddarIngredient);
    // const [fetaIngredient] = await knex(tableNames.ingredient).insert({name: 'Feta', [tableNameReferences.topping]: 1}).returning('*');
    // console.log('Ingredient Created', fetaIngredient);

    const [meatTopping] = await knex(tableNames.topping).insert({name: "Meat"}).returning('*');
    console.log('Topping Created', meatTopping);
    const [pizzaMeatToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Pizza Meat', [tableNameReferences.fields]: 1, [tableNameReferences.topping]: 2}).returning('*');
    console.log('Topping Set Created', pizzaMeatToppingSet);
    // const [pepperoniIngredient] = await knex(tableNames.ingredient).insert({name: 'Pepperoni', [tableNameReferences.topping]: 2}).returning('*');
    // console.log('Ingredient Created', pepperoniIngredient);
    // const [hamIngredient] = await knex(tableNames.ingredient).insert({name: 'Ham', [tableNameReferences.topping]: 2}).returning('*');
    // console.log('Ingredient Created', hamIngredient);
    // const [beefIngredient] = await knex(tableNames.ingredient).insert({name: 'Beef', [tableNameReferences.topping]: 2}).returning('*');
    // console.log('Ingredient Created', beefIngredient);

    const [veggieTopping] = await knex(tableNames.topping).insert({name: "Veggies"}).returning('*');
    console.log('Topping Created', veggieTopping);
    const [pizzaVeggieToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Pizza Veggies', [tableNameReferences.fields]: 1, [tableNameReferences.topping]: 3}).returning('*');
    console.log('Topping Set Created', pizzaVeggieToppingSet);    // const [oliveIngredient] = await knex(tableNames.ingredient).insert({name: 'Olives', [tableNameReferences.topping]: 3}).returning('*');
    // console.log('Ingredient Created', oliveIngredient);
    // const [onionIngredient] = await knex(tableNames.ingredient).insert({name: 'Onions', [tableNameReferences.topping]: 3}).returning('*');
    // console.log('Ingredient Created', onionIngredient);
    // const [pineappleIngredient] = await knex(tableNames.ingredient).insert({name: 'Pineapple', [tableNameReferences.topping]: 3}).returning('*');
    // console.log('Ingredient Created', pineappleIngredient);

    // const [testDefaultIngredient] = await knex(tableNames.default_ingredients).insert({name: 'test_join', [tableNameReferences.product]: 1, [tableNameReferences.ingredient]: 1}).returning('*');
    // console.log('Test Default Ingredient', testDefaultIngredient);
};