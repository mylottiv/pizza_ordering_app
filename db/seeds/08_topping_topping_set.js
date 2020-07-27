// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {


    const [cookedCheeseTopping] = await knex(tableNames.topping).insert({name: 'Cooked Cheese'}).returning('*');
    console.log('Topping Created', cookedCheeseTopping);
    const [pizzacookedCheeseToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Pizza Cooked Cheese', [tableNameReferences.fields]: 1, [tableNameReferences.topping]: 1}).returning('*');
    console.log('Topping Set Created', pizzacookedCheeseToppingSet);

    const [uncookedCheeseTopping] = await knex(tableNames.topping).insert({name: 'Uncooked Cheese'}).returning('*');
    console.log('Topping Created', uncookedCheeseTopping);
    const [saladUncookedCheeseToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Salad Uncooked Cheese', [tableNameReferences.fields]: 5, [tableNameReferences.topping]: 2}).returning('*');
    console.log('Topping Set Created', saladUncookedCheeseToppingSet);

    const [cookedMeatTopping] = await knex(tableNames.topping).insert({name: "Cooked Meat"}).returning('*');
    console.log('Topping Created', cookedMeatTopping);
    const [pizzaCookedMeatToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Pizza Cooked Meat', [tableNameReferences.fields]: 1, [tableNameReferences.topping]: 3}).returning('*');
    console.log('Topping Set Created', pizzaCookedMeatToppingSet);
    const [saladCookedMeatToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Salad Cooked Meat', [tableNameReferences.fields]: 5, [tableNameReferences.topping]: 3}).returning('*');
    console.log('Topping Set Created', saladCookedMeatToppingSet);

    const [uncookedMeatTopping] = await knex(tableNames.topping).insert({name: "Uncooked Meat"}).returning('*');
    console.log('Topping Created', uncookedMeatTopping);
    const [saladUncookedMeatToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Salad Uncooked Meat', [tableNameReferences.fields]: 5, [tableNameReferences.topping]: 4}).returning('*');
    console.log('Topping Set Created', saladUncookedMeatToppingSet);

    const [cookedVeggiesTopping] = await knex(tableNames.topping).insert({name: "Cooked Veggies"}).returning('*');
    console.log('Topping Created', cookedVeggiesTopping);
    const [pizzaCookedVeggiesToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Pizza Cooked Veggies', [tableNameReferences.fields]: 1, [tableNameReferences.topping]: 5}).returning('*');
    console.log('Topping Set Created', pizzaCookedVeggiesToppingSet);

    const [uncookedVeggiesTopping] = await knex(tableNames.topping).insert({name: "Uncooked Veggies"}).returning('*');
    console.log('Topping Created', uncookedVeggiesTopping);
    const [saladUncookedVeggieToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Salad Uncooked Veggies', [tableNameReferences.fields]: 5, [tableNameReferences.topping]: 6}).returning('*');
    console.log('Topping Set Created', saladUncookedVeggieToppingSet);

    const [greensTopping] = await knex(tableNames.topping).insert({name: "Greens"}).returning('*');
    console.log('Topping Created', greensTopping);
    const [saladGreensToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Salad Greens', [tableNameReferences.fields]: 5, [tableNameReferences.topping]: 7}).returning('*');
    console.log('Topping Set Created', saladGreensToppingSet);

};