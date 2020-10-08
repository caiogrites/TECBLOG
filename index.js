//npm init   npm install --save express    npm install --save sequelize    npm install -- mysql2   npm install --save body-parser   npm install --save ejs
const express = require("express");
const app = express();
const bodyParser = require("body-parser");    //bodyParser serve para trabalhar com os dados vindo do usuario via form por exemplo.
const connection = require("./database/database")
const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
//importando models para criação das tabelas no Mysql
const Article = require ("./articles/Article");
const Category = require ("./categories/Category");

//database
connection
    .authenticate()
    .then(()=>{
        console.log("conexão realizada com sucesso")
    }).catch(()=>{
        console.log("MsgErro")
    })

//view  engine
app.set('view engine', 'ejs');

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//arquivos staticos css js frontend
app.use(express.static('public'));

//chamando rotas do categoriesController  E articlesController   
app.use("/", categoriesController);
app.use("/", articlesController);


app.get("/", (req, res)=>{
    res.render("index");
})

app.listen(8080,()=>{
    console.log("Servidor rodando!")
});


