// src/server.js — ponto de entrada da API
import express from "express"; // o framework web
import cors from "cors";
import eventosRoutes from "./routes/eventos.routes.js";

const app = express(); // cria a aplicação
const PORTA = 3001; // a MESMA porta em que o json-server rodava

// middleware: roda ANTES das rotas e acrescenta o cabeçalho de
// autorização a todas as respostas. Em desenvolvimento, libera
// qualquer origem; em produção, restringe-se ao endereço do site.
app.use(cors());

// uma rota = método HTTP + caminho + função que atende
app.get("/", (req, res) => {
  // res.json converte o objeto em JSON e envia com status 200
  res.json({ mensagem: "UBM Eventos API no ar" });
});

// tudo que começar com /eventos é tratado pelo router
app.use("/eventos", eventosRoutes);

// abre a porta e passa a escutar — o programa NÃO termina aqui
app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
