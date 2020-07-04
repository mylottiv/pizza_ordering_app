const tableNames = require('./tableNames');

module.exports = Object.fromEntries((Object.entries(tableNames).map(([key, value]) => [key, `${value}_id`])));
