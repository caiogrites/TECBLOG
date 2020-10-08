// model de categories 
const Sequelize = require ("sequelize");
const connection = require ("../database/database");

const Category = connection.define('categories',{       //categories tabela criada no banco de dados
    title:{
        type:Sequelize.STRING,
        Allownull: false       
    },slug:{                               //slug endereco da categoria ex react js = react-js
        type:Sequelize.STRING,
        Allownull: false
    }
})

//Category.sync({force:true}) Remover após criar as tabelas para não ficar sincronizando toda hora

module.exports = Category;