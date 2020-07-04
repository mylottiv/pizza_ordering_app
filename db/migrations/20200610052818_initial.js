const Knex = require('knex');

const tableNames = require('../../constants/tablenames');

function defaultColumns(table) {
    table.timestamps(false, true);
    table.datetime('deleted_at');
}

function createReference(table, tableName, notNullable = true) {
    const reference = table
        .integer(`${tableName}_id`)
        .unsigned()
        .references('id')
        .inTable(tableName)
        .onDelete('CASCADE');
    if (notNullable) reference.notNullable();
}

function createNameTable(knex, tableName, foreignKeys) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments().notNullable();
        table.string('name').notNullable();
        if (foreignKeys) foreignKeys.forEach((foreign_key) => createReference(table, foreign_key));
        defaultColumns(table);
    })
}

function createBoolTable(knex, tableName, boolName, foreignKeys) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments().notNullable();
        table.string('name', 254).notNullable();
        table.boolean(boolName).notNullable();
        if (foreignKeys) foreignKeys.forEach((foreign_key) => createReference(table, foreign_key));
        defaultColumns(table);
    })
}

function createCartItem(knex) {
    return knex.schema.createTable(tableNames.cartItem, (table) => {
        table.increments().notNullable();
        table.string('name', 254).notNullable();
        table.boolean('coupon').notNullable();
        createReference(table, tableNames.coupon, false);
        createReference(table, tableNames.user);
        defaultColumns(table);
    })
}

function createUser(knex) {
    return knex.schema.createTable(tableNames.user, (table) => {
        table.increments().notNullable();
        table.string('email', 254).notNullable().unique();
        table.string('address', 254).notNullable().unique();
        table.string('name').notNullable();
        table.string('password', 500).notNullable();
        table.datetime('last_login');
        defaultColumns(table);
    })
}

function createCoupon(knex) {
    return knex.schema.createTable(tableNames.coupon, (table) => {
        table.increments().notNullable();
        table.string('name', 254).notNullable();
        table.string('description');
        table.boolean('fixed_size').notNullable();
        createReference(table, tableNames.menu);
        defaultColumns(table);
    })
};

exports.up = async (knex) => {
    await Promise.all([
        createUser(knex),
        createNameTable(knex, tableNames.menu),
        createCoupon(knex),
        createCartItem(knex),
        createNameTable(knex, tableNames.category, [tableNames.menu]),
        createNameTable(knex, tableNames.subcategory, [tableNames.category]),
        createNameTable(knex, tableNames.product, [tableNames.subcategory]),
        createNameTable(knex, tableNames.eligibleItem, [tableNames.coupon, tableNames.product]),
        createNameTable(knex, tableNames.choice, [tableNames.category]),
        createBoolTable(knex, tableNames.option, 'selected', [tableNames.choice]),
        createNameTable(knex, tableNames.ingredient, [tableNames.subcategory])
    ]);
};

exports.down = async (knex) => {
    await knex.schema.dropTable(tableNames.eligibleItem);
    await knex.schema.dropTable(tableNames.product);
    await knex.schema.dropTable(tableNames.ingredient);
    await knex.schema.dropTable(tableNames.subcategory);
    await knex.schema.dropTable(tableNames.option);
    await knex.schema.dropTable(tableNames.choice);
    await knex.schema.dropTable(tableNames.category);
    await knex.schema.dropTable(tableNames.cartItem);
    await knex.schema.dropTable(tableNames.coupon);
    await knex.schema.dropTable(tableNames.menu);
    await knex.schema.dropTable(tableNames.user);
};
