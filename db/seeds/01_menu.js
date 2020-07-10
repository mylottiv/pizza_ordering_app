// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {

    const [createdMenu] = await knex(tableNames.menu).insert({name: 'Normal Menu'}).returning('*');
    console.log('Menu Created', createdMenu);
    
    const [pizzaChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Choice Set'}).returning('*');
    console.log('Choice Set Created', pizzaChoiceSet);

    const [pizzaToppingSet] = await knex(tableNames.toppingSet).insert({name: 'Pizza Topping Set'}).returning('*');
    console.log('Topping Set Created', pizzaToppingSet);
};