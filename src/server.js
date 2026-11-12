// src/server.js — ponto de entrada da API
import express from "express"; // o framework web

const app = express(); // cria a aplicação
const PORTA = 3001; // a MESMA porta em que o json-server rodava

// uma rota = método HTTP + caminho + função que atende
app.get("/", (req, res) => {
  // res.json converte o objeto em JSON e envia com status 200
  res.json({ mensagem: "UBM Eventos API no ar" });
});

// abre a porta e passa a escutar — o programa NÃO termina aqui
app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
