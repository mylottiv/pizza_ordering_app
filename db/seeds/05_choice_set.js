// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');
const tablenameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {

    const [pizzaCrustChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Fields: Crust', [tableNameReferences.fields]: 1, [tableNameReferences.choice]: 1}).returning('*');
    console.log('Choice Set Created', pizzaCrustChoiceSet);
    const [pizzaSauceChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Fields: Sauce', [tableNameReferences.fields]: 1, [tableNameReferences.choice]: 2}).returning('*');
    console.log('Choice Set Created', pizzaSauceChoiceSet);
    const [pizzaSizeChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Fields: Size', [tableNameReferences.fields]: 1, [tableNameReferences.choice]: 3}).returning('*');
    console.log('Choice Set Created', pizzaSizeChoiceSet);

    const [pizzaAppetizerSizeChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Appetizer Fields: Size', [tableNameReferences.fields]: 2, [tableNameReferences.choice]: 3}).returning('*');
    console.log('Choice Set Created', pizzaAppetizerSizeChoiceSet);
    const [pizzaAppetizerDippingSauceChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Pizza Appetizer Fields: Dipping Sauce', [tableNameReferences.fields]: 2, [tableNameReferences.choice]: 6}).returning('*');
    console.log('Choice Set Created', pizzaAppetizerDippingSauceChoiceSet)

    const [nonPizzaAppetizerSizeChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Non-Pizza Appetizer Fields: Binary Size', [tableNameReferences.fields]: 3, [tableNameReferences.choice]: 4}).returning('*');
    console.log('Choice Set Created', nonPizzaAppetizerSizeChoiceSet);
    const [nonPizzaAppetizerDippingSauceChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Non-Pizza Appetizer Fields: Dipping Sauce', [tableNameReferences.fields]: 3, [tableNameReferences.choice]: 6}).returning('*');
    console.log('Choice Set Created', nonPizzaAppetizerDippingSauceChoiceSet);

    const [sauceSizeChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Sauce Fields: Cup Size', [tableNameReferences.fields]: 4, [tableNameReferences.choice]: 5}).returning('*');
    console.log('Choice Set Created', sauceSizeChoiceSet);

    const [saladSizeChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Salad Fields: Binary Size', [tableNameReferences.fields]: 5, [tableNameReferences.choice]: 4}).returning('*');
    console.log('Choice Set Created', saladSizeChoiceSet);
    const [saladDressingChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Salad Fields: Dressing', [tableNameReferences.fields]: 5, [tableNameReferences.choice]: 8}).returning('*');
    console.log('Choice Set Created', saladDressingChoiceSet);

    const [premadeDessertTypeChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Premade Dessert Fields: Type', [tableNameReferences.fields]: 6, [tableNameReferences.choice]: 9}).returning('*');
    console.log('Choice Set Created', premadeDessertTypeChoiceSet);

    const [dessertPizzaSizeChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Dessert Pizza Fields: Size', [tableNameReferences.fields]: 7, [tableNameReferences.choice]: 3}).returning('*');
    console.log('Choice Set Created', dessertPizzaSizeChoiceSet);
    const [dessertPizzaDippingSauceChoiceSet] = await knex(tableNames.choiceSet).insert({name: 'Dessert Pizza Fields: Dipping Sauce', [tablenameReferences.fields]: 7, [tableNameReferences.choice]: 7}).returning('*');
    console.log('Choice Set Created', dessertPizzaDippingSauceChoiceSet);

};