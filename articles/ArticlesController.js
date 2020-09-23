const express = require("express");
const router = express.Router(); // para criação das rotas

//rotas
router.get("/articles", (req, res)=>{
    res.send("ROTA DE ARTIGOS")
});

router.get("/admin/articles/new", (req, res)=>{
    res.send("rota para criar uma novo artigo")
});

module.exports = router;