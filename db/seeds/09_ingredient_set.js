// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {

    const [pizzaCheeseMozzarellaIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Cheese: Mozzarella', [tableNameReferences.topping]: 1, [tableNameReferences.ingredient]: 1}).returning('*');
    console.log('Ingredient Set Created', pizzaCheeseMozzarellaIngredientSet);
    const [pizzaCheeseCheddarIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Cheese: Cheddar', [tableNameReferences.topping]: 1, [tableNameReferences.ingredient]: 2}).returning('*');
    console.log('Ingredient Set Created', pizzaCheeseCheddarIngredientSet);
    const [pizzaCheeseFetaIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Cheese: Feta', [tableNameReferences.topping]: 1, [tableNameReferences.ingredient]: 3}).returning('*');
    console.log('Ingredient Set Created', pizzaCheeseFetaIngredientSet);

    const [pizzaMeatPepperoniIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Meat: Pepperoni', [tableNameReferences.topping]: 2, [tableNameReferences.ingredient]: 4}).returning('*');
    console.log('Ingredient Set Created', pizzaMeatPepperoniIngredientSet);
    const [pizzaMeatHamIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Meat: Ham', [tableNameReferences.topping]: 2, [tableNameReferences.ingredient]: 5}).returning('*');
    console.log('Ingredient Set Created', pizzaMeatHamIngredientSet);
    const [pizzaMeatBeefIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Meat: Beef', [tableNameReferences.topping]: 2, [tableNameReferences.ingredient]: 6}).returning('*');
    console.log('Ingredient Set Created', pizzaMeatBeefIngredientSet);

    const [pizzaVeggieOliveIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Veggie: Olives', [tableNameReferences.topping]: 3, [tableNameReferences.ingredient]: 7}).returning('*');
    console.log('Ingredient Set Created', pizzaVeggieOliveIngredientSet);
    const [pizzaVeggieOnionIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Veggie: Onions', [tableNameReferences.topping]: 3, [tableNameReferences.ingredient]: 8}).returning('*');
    console.log('Ingredient Set Created', pizzaVeggieOnionIngredientSet);
    const [pizzaVeggiePineappleIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Pizza Veggie: Pineapple', [tableNameReferences.topping]: 3, [tableNameReferences.ingredient]: 9}).returning('*');
    console.log('Ingredient Set Created', pizzaVeggiePineappleIngredientSet);

    const [testDefaultIngredient] = await knex(tableNames.default_ingredients).insert({name: 'test_join', [tableNameReferences.product]: 1, [tableNameReferences.ingredient]: 1}).returning('*');
    console.log('Test Default Ingredient', testDefaultIngredient);
}