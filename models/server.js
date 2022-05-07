//const express = require("express");
import express from "express";
import cors from "cors";
import { dbConnection } from "../database/config.js";
import persona from "../routes/persona.js"



class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.port = process.env.PORT; //process accede al archivo .env
    this.connectarbd()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('public'))// Esto es para poder poderlo ver en googlo por medio de un archivo html
  }

  async connectarbd(){
    await dbConnection ()
  }

  routes(){
    this.app.use("/api/persona",persona)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

export default Server;
