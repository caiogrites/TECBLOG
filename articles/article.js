const Sequelize = require ("sequelize");
const connection = require ("../database/database")

const Article = connection.define('article',{
    title:{
        type:Sequelize.STRING,
        Allownull: false
    },slug:{
        type:Sequelize.STRING,
        Allownull:false
    }
})

module.exports = Article;