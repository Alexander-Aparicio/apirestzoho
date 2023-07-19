require("dotenv").config();
const express = require("express");
const cors = require('cors')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.dataPath = '/api/data'
    // CORS
    this.middlewares();
    // RUTAS
    this.routes();
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.dataPath, require('../routes/data'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("SERVIDOR CORRIENDO EN EL PUERTO : ", this.port);
    });
  }
}

module.exports = Server;
