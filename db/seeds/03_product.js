// Capital K Knex included for autocomplete not passsed to seed function
const Knex = require('knex');

const tableNames = require('../../constants/tablenames');
const tableNameReferences = require('../../constants/tablenameReferences');

const BYOP_default = {
    Crust: "Hand Tossed",
    Sauce: "Marinara",
    Size: "Medium",
    Cheese: {
        Mozzarella: true,
        Cheddar: false,
        Feta: false,
        Parmesan: false
    },
    Meat: {
        Pepperoni: false,
        Ham: false,
        Beef: false,
        Chicken: false,
        Bacon: false
    },
    Veggies: {
        Olives: false,
        Onions: false,
        Pineapple: false,
        Tomato: false
    }
};

const Hawaiian_default = {
    Crust: "Hand Tossed",
    Sauce: "Marinara",
    Size: "Medium",
    Cheese: {
        Mozzarella: true,
        Cheddar: false,
        Feta: false,
        Parmesan: false
    },
    Meat: {
        Pepperoni: false,
        Ham: true,
        Beef: false,
        Chicken: false,
        Bacon: false
    },
    Veggies: {
        Olives: false,
        Onions: false,
        Pineapple: true,
        Tomato: false
    }
};

const Works_default = {
    Crust: "Hand Tossed",
    Sauce: "Marinara",
    Size: "Medium",
    Cheese: {
        Mozzarella: true,
        Cheddar: false,
        Feta: false,
        Parmesan: false
    },
    Meat: {
        Pepperoni: true,
        Ham: true,
        Beef: true,
        Chicken: false,
        Bacon: false
    },
    Veggies: {
        Olives: true,
        Onions: true,
        Pineapple: false,
        Tomato: true
    }
};

const cheeseSticks_default = {
    Size: "Medium",
    Dipping_Sauce: "Marinara"
};

const mozzarellaSticks_default = {
    Size: "Small",
    Dipping_Sauce: "Marinara"
};

const sauce_default = {
    Size: "2 Oz"
};

const caesar_default = {
    Size: "Small",
    Dressing: "Caesar",
    Greens: {
        Lettuce: true,
        Spinach: false
    },
    Cheese: {
        Mozzarella: false,
        Cheddar: false,
        Feta: false,
        Parmesan: true
    },
    Meat: {
        Pepperoni: false,
        Ham: false,
        Beef: false,
        Chicken: true,
        Bacon: false
    },
    Veggies: {
        Olives: false,
        Onions: false,
        Pineapple: false,
        Tomato: false,
        Carrots: false,
        Croutons: false
    }
}

const greek_default = {
    Size: "Small",
    Dressing: "Greek",
    Greens: {
        Lettuce: false,
        Spinach: true
    },
    Cheese: {
        Mozzarella: false,
        Cheddar: false,
        Feta: true,
        Parmesan: false
    },
    Meat: {
        Pepperoni: false,
        Ham: false,
        Beef: false,
        Chicken: false,
        Bacon: false
    },
    Veggies: {
        Olives: true,
        Onions: true,
        Pineapple: false,
        Tomato: true,
        Carrots: false,
        Croutons: false
    }
}

const garden_default = {
    Size: "Small",
    Dressing: "Balsamic",
    Greens: {
        Lettuce: true,
        Spinach: false
    },
    Cheese: {
        Mozzarella: false,
        Cheddar: false,
        Feta: false,
        Parmesan: false
    },
    Meat: {
        Pepperoni: false,
        Ham: false,
        Beef: false,
        Chicken: false,
        Bacon: false
    },
    Veggies: {
        Olives: false,
        Onions: true,
        Pineapple: false,
        Tomato: true,
        Carrots: true,
        Croutons: false
    }
}

const tabouli_default = {
    // This requires additional Options
}

const cinnaStix_default = {
    Size: "Medium",
    Dipping_Sauce: "Icing"
}

const smores_default = {
    Size: "Medium",
    Dipping_Sauce: "Dulce De Lece"
}

exports.seed = async (knex) => {

    const coupon = {
        name: 'BOGO', 
        description: 'Buy One Get One Free', 
        fixed_size: true, 
        [tableNameReferences.menu]: 1
    };

    const [ByopProduct] = await knex(tableNames.product).insert({name: 'Build Your Own Pizza', description: '', [tableNameReferences.subcategory]: 1, [tableNameReferences.fields]: 1, default_fields: JSON.stringify(BYOP_default)}).returning('*');
    console.log('Product Created', ByopProduct);
    const [HawaiianProduct] = await knex(tableNames.product).insert({name: 'Hawaiian', description: '', [tableNameReferences.subcategory]: 2, [tableNameReferences.fields]: 1, default_fields: JSON.stringify(Hawaiian_default)}).returning('*');
    console.log('Product Created', HawaiianProduct);
    const [WorksProduct] = await knex(tableNames.product).insert({name: 'The Works', description: '', [tableNameReferences.subcategory]: 2, [tableNameReferences.fields]: 1, default_fields: JSON.stringify(Works_default)}).returning('*');
    console.log('Product Created', WorksProduct);

    const [cheeseSticksProduct] = await knex(tableNames.product).insert({name: 'Cheese Sticks', description: '', [tableNameReferences.subcategory]: 3, [tableNameReferences.fields]: 2, default_fields: JSON.stringify(cheeseSticks_default)}).returning('*');
    console.log('Product Created', cheeseSticksProduct);
    const [mozzarellaSticksProduct] = await knex(tableNames.product).insert({name: 'Mozzarella Sticks', description: '', [tableNameReferences.subcategory]: 3, [tableNameReferences.fields]: 3, default_fields: JSON.stringify(mozzarellaSticks_default)}).returning('*');
    console.log('Product Created', mozzarellaSticksProduct);

    const [marinaraProduct] = await knex(tableNames.product).insert({name: 'Side of Marinara', description: '', [tableNameReferences.subcategory]: 4, [tableNameReferences.fields]: 4, default_fields: JSON.stringify(sauce_default)}).returning('*');
    console.log('Product Created', marinaraProduct);
    const [ranchProduct] = await knex(tableNames.product).insert({name: 'Side of Ranch', description: '', [tableNameReferences.subcategory]: 4, [tableNameReferences.fields]: 4, default_fields: JSON.stringify(sauce_default)}).returning('*');
    console.log('Product Created', ranchProduct);

    const [caesarProduct] = await knex(tableNames.product).insert({name: 'Caesar Salad', description: '', [tableNameReferences.subcategory]: 5, [tableNameReferences.fields]: 5, default_fields: JSON.stringify(caesar_default)}).returning('*');
    console.log('Product Created', caesarProduct);
    const [greekProduct] = await knex(tableNames.product).insert({name: 'Greek Salad', description: '', [tableNameReferences.subcategory]: 5, [tableNameReferences.fields]: 5, default_fields: JSON.stringify(greek_default)}).returning('*');
    console.log('Product Created', greekProduct);

    const [gardenProduct] = await knex(tableNames.product).insert({name: 'Garden Salad', description: '', [tableNameReferences.subcategory]: 6, [tableNameReferences.fields]: 5, default_fields: JSON.stringify(garden_default)}).returning('*');
    console.log('Product Created', gardenProduct);
    const [tabouliProduct] = await knex(tableNames.product).insert({name: 'Tabouli Salad', description: '', [tableNameReferences.subcategory]: 6, [tableNameReferences.fields]: 5, default_fields: JSON.stringify(tabouli_default)}).returning('*');
    console.log('Product Created', tabouliProduct);

    const [cookiesProduct] = await knex(tableNames.product).insert({name: 'Cookies', description: '', [tableNameReferences.subcategory]: 7, [tableNameReferences.fields]: 6}).returning('*');
    console.log('Product Created', cookiesProduct);
    const [browniesProduct] = await knex(tableNames.product).insert({name: 'Brownies', description: '', [tableNameReferences.subcategory]: 7, [tableNameReferences.fields]: 6}).returning('*');
    console.log('Product Created', browniesProduct);

    const [cinnastixProduct] = await knex(tableNames.product).insert({name: 'Cinnastix', description: '', [tableNameReferences.subcategory]: 8, [tableNameReferences.fields]: 7, default_fields: JSON.stringify(cinnaStix_default)}).returning('*');
    console.log('Product Created', cinnastixProduct);
    const [smoresProduct] = await knex(tableNames.product).insert({name: "S'Mores", description: '', [tableNameReferences.subcategory]: 8, [tableNameReferences.fields]: 7, default_fields: JSON.stringify(smores_default)}).returning('*');
    console.log('Product Created', smoresProduct);

    const [testCoupon] = await knex(tableNames.coupon).insert(coupon).returning('*');
    console.log('Coupon Created', testCoupon);

    const [testEligibleItem] = await knex(tableNames.eligibleItem).insert({name: 'test_eligible_item', [tableNameReferences.product]: 1, [tableNameReferences.coupon]: 1}).returning('*');
    console.log('Eligible Item Created', testEligibleItem);

}