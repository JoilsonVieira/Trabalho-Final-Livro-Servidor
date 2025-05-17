const express = require("express");
const router = express.Router();

const { obterLivros, incluir, excluir } = require("../modelo/livro-dao");

router.get("/", async (req, res) => {
    try {
        const livros = await obterLivros();
        console.log("LIVROS: ", livros);
        res.json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao obter livros" });
    }
});

router.post("/", async (req, res) => {
    try {
        await incluir(req.body);
        res.json({ mensagem: "Livro incluído com sucesso" });
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao incluir livro" });
    }
});

router.delete("/:codigo", async (req, res) => {
    try {
        await excluir(req.params.codigo);
        res.json({ mensagem: "Livro excluido com sucesso" });
    } catch (erro) {
        console.error("Erro ao obter livros:", erro);
        res.status(500).json({ erro: "Erro ao obter livros" });
    }
});

module.exports = router;
