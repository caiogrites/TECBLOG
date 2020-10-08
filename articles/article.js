const Sequelize = require ("sequelize");
const connection = require ("../database/database");
const Category = require ("../categories/Category");

const Article = connection.define('article', {
    title:{
        type:Sequelize.STRING,
        Allownull: false
    }, slug:{
        type:Sequelize.STRING,
        Allownull:false
    },body:{
        type:Sequelize.TEXT,
        Allownull:false
    }
    
})


//relacionamento entre models importante para a performance do app
Category.hasMany(Article); // hasMany 1-p-Muitos = Category possui muitos artigos
Article.belongsTo(Category); //belongsto 1-p-1 = article pertence a 1 Categoria  
//Article.sync({force:true}); Remover após criar as tabelas para não ficar sincronizando toda hora
module.exports = Article;





