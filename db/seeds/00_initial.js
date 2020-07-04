// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const orderedTableNames = require('../../constants/orderedtablenames');
const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

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
  
  const coupon = {
    name: 'BOGO', 
    description: 'Buy One Get One Free', 
    fixed_size: true, 
    [tableNameReferences.menu]: 1
  };

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

  const [createdUser] = await knex(tableNames.user).insert(user).returning('*');
  console.log('User Created:', createdUser);
  const [createdMenu] = await knex(tableNames.menu).insert({name: 'Normal Menu'}).returning('*');
  console.log('Menu Created', createdMenu);
  const [testCoupon] = await knex(tableNames.coupon).insert(coupon).returning('*');
  console.log('Coupon Created', testCoupon);
  const [testCategory] = await knex(tableNames.category).insert({name: 'Pizza', [tableNameReferences.menu]: 1}).returning('*');
  console.log('Category Created', testCategory);
  const [testSubCategory] = await knex(tableNames.subcategory).insert({name: 'BYOP', [tableNameReferences.category]: 1}).returning('*');
  console.log('SubCategory Created', testSubCategory);
  const [testProduct] = await knex(tableNames.product).insert({name: 'BYOP Base', [tableNameReferences.subcategory]: 1}).returning('*');
  console.log('Product Created', testProduct);
  const [testCartItemC] = await knex(tableNames.cartItem).insert(cartItemC).returning('*');
  console.log('Cart Item C Created', testCartItemC);
  const [testCartItemP] = await knex(tableNames.cartItem).insert(cartItemP).returning('*');
  console.log('Cart Item P Created', testCartItemP);
  const [testEligibleItem] = await knex(tableNames.eligibleItem).insert({name: 'test_eligible_item', [tableNameReferences.product]: 1, [tableNameReferences.coupon]: 1}).returning('*');
  console.log('Eligible Item Created', testEligibleItem);
  const [testChoice] = await knex(tableNames.choice).insert({name: 'Crust', [tableNameReferences.category]: 1}).returning('*');
  console.log('Choice Created', testChoice);
  const [testOption] = await knex(tableNames.option).insert({name: 'Hand Tossed', selected: false, [tableNameReferences.choice]: 1}).returning('*');
  console.log('Choice Created', testChoice);
  const [testIngredient] = await knex(tableNames.ingredient).insert({name: 'Cheese', [tableNameReferences.subcategory]: 1}).returning('*');
  console.log('Ingredient Created', testIngredient);
};
