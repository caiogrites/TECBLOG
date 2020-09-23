const { Router } = require("express");
const express = require("express");
const router = express.Router(); // para criação das rotas

//rotas
router.get("/categories", (req, res)=>{
    res.send("ROTA DE CATEGORIAS")
});

router.get("/admin/categories/new", (req, res)=>{
    res.send("rota para criar uma nova categoria")
});

module.exports = router;