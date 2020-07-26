// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {
    const cartItemC = {
        name: 'test_item_1',
        coupon: true,
        [tableNameReferences.user]: 1,
        [tableNameReferences.coupon]: 1
    };
    
    const cartItemP = {
        name: 'test_item_1',
        coupon: false,
        [tableNameReferences.user]: 1,
        [tableNameReferences.coupon]: null
    };
    
    const [testCartItemC] = await knex(tableNames.cartItem).insert(cartItemC).returning('*');
    console.log('Cart Item C Created', testCartItemC);
    const [testCartItemP] = await knex(tableNames.cartItem).insert(cartItemP).returning('*');
    console.log('Cart Item P Created', testCartItemP);
}