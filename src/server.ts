import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import "./database";
import { routes } from "./routes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

const http = createServer(app); // Criando o protocolo http
const io = new Server(http); // Criando o protocolo WS

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});
app.use(express.json());
app.use(routes);
http.listen(3333, () => console.log("Server is running on port 3333"));