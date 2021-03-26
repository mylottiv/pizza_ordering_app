// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {

    const [cookedCheeseMozzarellaIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Cheese: Mozzarella', [tableNameReferences.topping]: 1, [tableNameReferences.ingredient]: 1}).returning('*');
    console.log('Ingredient Set Created', cookedCheeseMozzarellaIngredientSet);
    const [cookedCheeseCheddarIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Cheese: Cheddar', [tableNameReferences.topping]: 1, [tableNameReferences.ingredient]: 2}).returning('*');
    console.log('Ingredient Set Created', cookedCheeseCheddarIngredientSet);
    const [cookedCheeseFetaIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Cheese: Feta', [tableNameReferences.topping]: 1, [tableNameReferences.ingredient]: 3}).returning('*');
    console.log('Ingredient Set Created', cookedCheeseFetaIngredientSet);
    const [cookedCheeseParmesanIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Cheese: Parmesan', [tableNameReferences.topping]: 1, [tableNameReferences.ingredient]: 4}).returning('*');
    console.log('Ingredient Set Created', cookedCheeseParmesanIngredientSet);

    const [uncookedCheeseMozzarellaIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Cheese: Mozzarella', [tableNameReferences.topping]: 2, [tableNameReferences.ingredient]: 1}).returning('*');
    console.log('Ingredient Set Created', uncookedCheeseMozzarellaIngredientSet);
    const [uncookedCheeseCheddarIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Cheese: Cheddar', [tableNameReferences.topping]: 2, [tableNameReferences.ingredient]: 2}).returning('*');
    console.log('Ingredient Set Created', uncookedCheeseCheddarIngredientSet);
    const [uncookedCheeseFetaIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Cheese: Feta', [tableNameReferences.topping]: 2, [tableNameReferences.ingredient]: 3}).returning('*');
    console.log('Ingredient Set Created', uncookedCheeseFetaIngredientSet);
    const [uncookedCheeseParmesanIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Cheese: Parmesan', [tableNameReferences.topping]: 2, [tableNameReferences.ingredient]: 4}).returning('*');
    console.log('Ingredient Set Created', uncookedCheeseParmesanIngredientSet);

    const [cookedMeatPepperoniIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Meat: Pepperoni', [tableNameReferences.topping]: 3, [tableNameReferences.ingredient]: 5}).returning('*');
    console.log('Ingredient Set Created', cookedMeatPepperoniIngredientSet);
    const [cookedMeatHamIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Meat: Ham', [tableNameReferences.topping]: 3, [tableNameReferences.ingredient]: 6}).returning('*');
    console.log('Ingredient Set Created', cookedMeatHamIngredientSet);
    const [cookedMeatBeefIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Meat: Beef', [tableNameReferences.topping]: 3, [tableNameReferences.ingredient]: 7}).returning('*');
    console.log('Ingredient Set Created', cookedMeatBeefIngredientSet);
    const [cookedMeatChickenIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Meat: Chicken', [tableNameReferences.topping]: 3, [tableNameReferences.ingredient]: 8}).returning('*');
    console.log('Ingredient Set Created', cookedMeatChickenIngredientSet);
    const [cookedMeatBaconIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Meat: Bacon', [tableNameReferences.topping]: 3, [tableNameReferences.ingredient]: 9}).returning('*');
    console.log('Ingredient Set Created', cookedMeatBaconIngredientSet);

    const [uncookedMeatPepperoniIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Meat: Pepperoni', [tableNameReferences.topping]: 4, [tableNameReferences.ingredient]: 5}).returning('*');
    console.log('Ingredient Set Created', uncookedMeatPepperoniIngredientSet);
    const [uncookedMeatHamIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Meat: Ham', [tableNameReferences.topping]: 4, [tableNameReferences.ingredient]: 6}).returning('*');
    console.log('Ingredient Set Created', uncookedMeatHamIngredientSet);
    const [uncookedMeatBaconIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Meat: Bacon', [tableNameReferences.topping]: 4, [tableNameReferences.ingredient]: 9}).returning('*');
    console.log('Ingredient Set Created', uncookedMeatBaconIngredientSet);

    const [cookedVeggiesOliveIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Veggies: Olives', [tableNameReferences.topping]: 5, [tableNameReferences.ingredient]: 10}).returning('*');
    console.log('Ingredient Set Created', cookedVeggiesOliveIngredientSet);
    const [cookedVeggiesOnionIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Veggies: Onions', [tableNameReferences.topping]: 5, [tableNameReferences.ingredient]: 11}).returning('*');
    console.log('Ingredient Set Created', cookedVeggiesOnionIngredientSet);
    const [cookedVeggiesPineappleIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Veggies: Pineapple', [tableNameReferences.topping]: 5, [tableNameReferences.ingredient]: 12}).returning('*');
    console.log('Ingredient Set Created', cookedVeggiesPineappleIngredientSet);
    const [cookedVeggiesTomatoIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Cooked Veggies: Tomato', [tableNameReferences.topping]: 5, [tableNameReferences.ingredient]: 13}).returning('*');
    console.log('Ingredient Set Created', cookedVeggiesTomatoIngredientSet);

    const [uncookedVeggiesOliveIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Veggies: Olives', [tableNameReferences.topping]: 6, [tableNameReferences.ingredient]: 10}).returning('*');
    console.log('Ingredient Set Created', uncookedVeggiesOliveIngredientSet);
    const [uncookedVeggiesOnionIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Veggies: Onions', [tableNameReferences.topping]: 6, [tableNameReferences.ingredient]: 11}).returning('*');
    console.log('Ingredient Set Created', uncookedVeggiesOnionIngredientSet);
    const [uncookedVeggiesPineappleIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Veggies: Pineapple', [tableNameReferences.topping]: 6, [tableNameReferences.ingredient]: 12}).returning('*');
    console.log('Ingredient Set Created', uncookedVeggiesPineappleIngredientSet);
    const [uncookedVeggiesTomatoIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Veggies: Tomato', [tableNameReferences.topping]: 6, [tableNameReferences.ingredient]: 13}).returning('*');
    console.log('Ingredient Set Created', uncookedVeggiesTomatoIngredientSet);
    const [uncookedVeggiesCarrotsIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Veggies: Carrots', [tableNameReferences.topping]: 6, [tableNameReferences.ingredient]: 14}).returning('*');
    console.log('Ingredient Set Created', uncookedVeggiesCarrotsIngredientSet);
    const [uncookedVeggiesCroutonIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Uncooked Veggies: Crouton', [tableNameReferences.topping]: 6, [tableNameReferences.ingredient]: 15}).returning('*');
    console.log('Ingredient Set Created', uncookedVeggiesCroutonIngredientSet);

    const [greensLettuceIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Greens: Lettuce', [tableNameReferences.topping]: 7, [tableNameReferences.ingredient]: 16}).returning('*');
    console.log('Ingredient Set Created', greensLettuceIngredientSet);
    const [greensSpinachIngredientSet] = await knex(tableNames.ingredientSet).insert({name: 'Greens: Spinach', [tableNameReferences.topping]: 7, [tableNameReferences.ingredient]: 17}).returning('*');
    console.log('Ingredient Set Created', greensSpinachIngredientSet);
}