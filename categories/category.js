// model de categories 
const Sequelize = require ("sequelize");
const connection = require ("../database/database");

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        Allownull: false
    }, slug:{
        type:Sequelize.STRING,
        Allownull: false
    }
})

module.exports = Category;