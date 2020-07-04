const Knex = require('knex');

const tableNames = require('../../constants/tablenames');

function defaultColumns(table) {
    table.timestamps(false, true);
    table.datetime('deleted_at');
}

function references(table, tableName) {
    table
        .integer(`${tableName}_id`)
        .unsigned()
        .references('id')
        .inTable(tableName)
        .onDelete('CASCADE');
}

function createNameTable(knex, tableName, foreignKeys) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments().notNullable();
        table.string('name').notNullable();
        (foreignKeys) && foreignKeys.forEach((table) => references('id').inTable(table));
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

exports.up = async (knex) => {
    await Promise.all([
        createUser(knex),
        createNameTable(knex, tableNames.cart, [tableNames.user]),
        createNameTable(knex, tableNames.menu),
        createNameTable(knex, tableNames.coupon, [tableNames.menu]),
        createNameTable(knex, tableNames.category, [tableNames.menu]),
        createNameTable(knex, tableNames.subcategory, [tableNames.category]),
        createNameTable(knex, tableNames.product, [tableNames.subcategory]),
    ]);
};

exports.down = async (knex) => {
    await knex.schema.dropTable(tableNames.product)
    await knex.schema.dropTable(tableNames.subcategory)
    await knex.schema.dropTable(tableNames.category)
    await knex.schema.dropTable(tableNames.coupon)
    await knex.schema.dropTable(tableNames.menu)
    await knex.schema.dropTable(tableNames.cart)
    await knex.schema.dropTable(tableNames.user)
};
