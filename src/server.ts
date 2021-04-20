import express from "express";

const app = express();
/**
 * GET = buscas 
 * POST = criação 
 * PUT = alteração
 * DELETE = delete
 * PATCH = alterar uma info específica
 */
app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05",
  });
});
app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo!" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));