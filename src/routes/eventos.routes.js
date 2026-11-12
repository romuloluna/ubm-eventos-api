// src/routes/eventos.routes.js — as rotas de /eventos
import { Router } from "express";
import { eventos } from "../data/eventos.js"; // extensão .js OBRIGATÓRIA

const router = Router(); // um "mini-app" que agrupa rotas relacionadas

// GET /eventos  ->  a lista inteira
// o caminho é "/" porque o prefixo /eventos é definido no server.js
router.get("/", (req, res) => {
  res.json(eventos);
});

// GET /eventos/:id  ->  um evento, ou 404
router.get("/:id", (req, res) => {
  // o parâmetro da URL chega como STRING; o id do array é NÚMERO
  const id = Number(req.params.id);

  const evento = eventos.find((e) => e.id === id);

  // retorno antecipado: se não achou, responde e ENCERRA a função
  // sem o return, o código continuaria e tentaria responder duas vezes
  if (!evento) {
    return res.status(404).json({ erro: "Evento não encontrado" });
  }

  res.json(evento);
});

export default router;
