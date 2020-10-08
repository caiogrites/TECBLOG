const express = require("express");
const router = express.Router(); // para criação das rotas
const Category = require ("./Category");
const slugify = require ("slugify");

//rotas
router.get ("/admin/categories/new", (req,res)=>{
    res.render("admin/categories/new");
});

//salvando no banco de dados as informções vindo do formulário
router.post("/categories/save", (req,res)=>{
     var title = req.body.title;
     if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)   //instalar biblioteca slugify que transforma o titulo em uma frase minuscula sem espaço npm install --save slugify
        }).then(()=>{
            res.redirect("/");
        })
     }else{
         res.redirect("/admin/categories/new");
     }
});

//enviando as informações do banco de dados para o frontend na tabela
router.get("/admin/categories", (req,res)=>{
    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories: categories})
    })
});

// deletando categorias
router.post("/categories/delete", (req,res)=>{
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){    //método para verificar se o Id é numérico ou não

            Category.destroy({
                where: {
                    id:id
                }
            }).then(()=>{
                res.redirect("/admin/categories");
            })

        }else {    // Não for um numero
            res.redirect("/admin/categories")
        }
    }else { //NULL
        res.redirect("/admin/categories");
    }
})

module.exports = router;

