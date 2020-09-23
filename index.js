//npm init   npm install --save express    npm install --save sequelize    npm install -- mysql2   npm install --save body-parser   npm install --save ejs
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")
const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")

//database
connection 
    .authenticate()
    .then(()=>{
        console.log("conexão feita com sucesso!")
    }).catch((MsgErro)=>{
        console.log("MsgErro")
    })

//view  engine
app.set('view engine', 'ejs');

//arquivos staticos css js frontend
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//chamando rotas do categoriesController  E articlesController   
app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res)=>{
    res.render("index");
})

app.listen(8080, () => {
    console.log("O servidor está rodando")
})
