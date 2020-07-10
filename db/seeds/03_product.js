// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

exports.seed = async (knex) => {

    const coupon = {
        name: 'BOGO', 
        description: 'Buy One Get One Free', 
        fixed_size: true, 
        [tableNameReferences.menu]: 1
    };

    const [ByopProduct] = await knex(tableNames.product).insert({name: 'Build Your Own Pizza', [tableNameReferences.subcategory]: 1}).returning('*');
    console.log('Product Created', ByopProduct);
    const [HawaiianProduct] = await knex(tableNames.product).insert({name: 'Hawaiian', [tableNameReferences.subcategory]: 2}).returning('*');
    console.log('Product Created', HawaiianProduct);
    const [WorksProduct] = await knex(tableNames.product).insert({name: 'The Works', [tableNameReferences.subcategory]: 2}).returning('*');
    console.log('Product Created', WorksProduct);

    const [testCoupon] = await knex(tableNames.coupon).insert(coupon).returning('*');
    console.log('Coupon Created', testCoupon);
    const [testEligibleItem] = await knex(tableNames.eligibleItem).insert({name: 'test_eligible_item', [tableNameReferences.product]: 1, [tableNameReferences.coupon]: 1}).returning('*');
    console.log('Eligible Item Created', testEligibleItem);
}