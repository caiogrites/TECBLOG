const Sequelize = require ("sequelize");
const connection = new Sequelize ('tecblog', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
