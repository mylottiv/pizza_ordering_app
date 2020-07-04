const tableNames = require('./tablenames');

module.exports = [
    // Product Tree
    tableNames.menu,
    tableNames.coupon,
    tableNames.category,
    tableNames.choice,
    tableNames.option,
    tableNames.subcategory,
    tableNames.ingredient,
    tableNames.product,
    tableNames.eligibleItem,
    // User Tree
    tableNames.user,
    tableNames.cartItem,
]