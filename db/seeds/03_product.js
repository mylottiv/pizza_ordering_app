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

    const [ByopProduct] = await knex(tableNames.product).insert({name: 'Build Your Own Pizza', [tableNameReferences.subcategory]: 1, [tableNameReferences.fields]: 1}).returning('*');
    console.log('Product Created', ByopProduct);
    const [HawaiianProduct] = await knex(tableNames.product).insert({name: 'Hawaiian', [tableNameReferences.subcategory]: 2, [tableNameReferences.fields]: 1}).returning('*');
    console.log('Product Created', HawaiianProduct);
    const [WorksProduct] = await knex(tableNames.product).insert({name: 'The Works', [tableNameReferences.subcategory]: 2, [tableNameReferences.fields]: 1}).returning('*');
    console.log('Product Created', WorksProduct);

    const [cheeseSticksProduct] = await knex(tableNames.product).insert({name: 'Cheese Sticks', [tableNameReferences.subcategory]: 3, [tableNameReferences.fields]: 2}).returning('*');
    console.log('Product Created', cheeseSticksProduct);
    const [mozzarellaSticksProduct] = await knex(tableNames.product).insert({name: 'Mozzarella Sticks', [tableNameReferences.subcategory]: 3, [tableNameReferences.fields]: 3}).returning('*');
    console.log('Product Created', mozzarellaSticksProduct);

    const [marinaraProduct] = await knex(tableNames.product).insert({name: 'Side of Marinara', [tableNameReferences.subcategory]: 4, [tableNameReferences.fields]: 4}).returning('*');
    console.log('Product Created', marinaraProduct);
    const [ranchProduct] = await knex(tableNames.product).insert({name: 'Side of Ranch', [tableNameReferences.subcategory]: 4, [tableNameReferences.fields]: 4}).returning('*');
    console.log('Product Created', ranchProduct);

    const [caesarProduct] = await knex(tableNames.product).insert({name: 'Caesar Salad', [tableNameReferences.subcategory]: 5, [tableNameReferences.fields]: 5}).returning('*');
    console.log('Product Created', caesarProduct);
    const [greekProduct] = await knex(tableNames.product).insert({name: 'Greek Salad', [tableNameReferences.subcategory]: 5, [tableNameReferences.fields]: 5}).returning('*');
    console.log('Product Created', greekProduct);

    const [gardenProduct] = await knex(tableNames.product).insert({name: 'Garden Salad', [tableNameReferences.subcategory]: 6, [tableNameReferences.fields]: 5}).returning('*');
    console.log('Product Created', gardenProduct);
    const [tabouliProduct] = await knex(tableNames.product).insert({name: 'Tabouli Salad', [tableNameReferences.subcategory]: 6, [tableNameReferences.fields]: 5}).returning('*');
    console.log('Product Created', tabouliProduct);

    const [cookiesProduct] = await knex(tableNames.product).insert({name: 'Cookies', [tableNameReferences.subcategory]: 7, [tableNameReferences.fields]: 6}).returning('*');
    console.log('Product Created', cookiesProduct);
    const [browniesProduct] = await knex(tableNames.product).insert({name: 'Brownies', [tableNameReferences.subcategory]: 7, [tableNameReferences.fields]: 6}).returning('*');
    console.log('Product Created', browniesProduct);

    const [cinnastixProduct] = await knex(tableNames.product).insert({name: 'Cinnastix', [tableNameReferences.subcategory]: 8, [tableNameReferences.fields]: 7}).returning('*');
    console.log('Product Created', cinnastixProduct);
    const [smoresProduct] = await knex(tableNames.product).insert({name: "S'Mores", [tableNameReferences.subcategory]: 8, [tableNameReferences.fields]: 7}).returning('*');
    console.log('Product Created', smoresProduct);

    const [testCoupon] = await knex(tableNames.coupon).insert(coupon).returning('*');
    console.log('Coupon Created', testCoupon);

    const [testEligibleItem] = await knex(tableNames.eligibleItem).insert({name: 'test_eligible_item', [tableNameReferences.product]: 1, [tableNameReferences.coupon]: 1}).returning('*');
    console.log('Eligible Item Created', testEligibleItem);

}