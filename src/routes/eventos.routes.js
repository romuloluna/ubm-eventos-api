// src/routes/eventos.routes.js — as rotas de /eventos
import { Router } from "express";
import { eventos } from "../data/eventos.js"; // extensão .js OBRIGATÓRIA

const router = Router(); // um "mini-app" que agrupa rotas relacionadas

// GET /eventos  ->  a lista inteira, ou filtrada por ?q=texto
// o caminho é "/" porque o prefixo /eventos é definido no server.js
router.get("/", (req, res) => {
  // req.query.q é string OU undefined (quando o parâmetro não vem).
  // O ?? "" troca undefined por texto vazio: toLowerCase fica seguro.
  // String(...) evita erro se vier repetido (?q=a&q=b), que chega como array.
  const q = String(req.query.q ?? "").toLowerCase();

  // sem filtro (ausente ou "?q="): devolve a lista inteira
  if (q === "") {
    return res.json(eventos);
  }

  // com filtro: a mesma lógica do .filter() da Aula 4, no servidor
  const filtrados = eventos.filter((e) => e.titulo.toLowerCase().includes(q));
  res.json(filtrados);
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
