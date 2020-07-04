// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const orderedTableNames = require('../../constants/orderedtablenames');
const tableNames = require('../../constants/tablenames');

exports.seed = async (knex) => {
  await orderedTableNames
    .reduce(async (promise, table_name) => {
      await promise;
      console.log('Clearing', table_name);
      await knex(table_name).del();
      return await knex.raw('TRUNCATE TABLE ' + table_name + ' RESTART IDENTITY CASCADE');
    }, Promise.resolve());
  
  const user = {
    email: 'test@test.null',
    name: 'test_user',
    address: 'here',
    password: 'pass'
  };

  const [createdUser] = await knex(tableNames.user).insert(user).returning('*');
  console.log('User Created:', createdUser);
  const [createdMenu] = await knex(tableNames.menu).insert({name: 'Normal Menu'}).returning('*');
  console.log('Menu Created', createdMenu);
  const [testCoupon] = await knex(tableNames.coupon).insert({name: 'BOGO', menu_id: 1}).returning('*');
  console.log('Coupon Created', testCoupon);
  const [testCategory] = await knex(tableNames.category).insert({name: 'Pizza', menu_id: 1}).returning('*');
  console.log('Category Created', testCategory);
  const [testSubCategory] = await knex(tableNames.subcategory).insert({name: 'BYOP', category_id: 1}).returning('*');
  console.log('SubCategory Created', testSubCategory);
  const [testProduct] = await knex(tableNames.product).insert({name: 'BYOP Base', subcategory_id: 1}).returning('*');
  console.log('Product Created', testProduct);
  const [testCartItemC] = await knex(tableNames.cartItem).insert({name: 'test_item_1', coupon: true, cart_id: 1, coupon_id: 1}).returning('*');
  console.log('Cart Item C Created', testCartItemC);
  const [testCartItemP] = await knex(tableNames.cartItem).insert({name: 'test_item_1', coupon: false, cart_id: 1, coupon_id: null}).returning('*');
  console.log('Cart Item P Created', testCartItemP);
};
