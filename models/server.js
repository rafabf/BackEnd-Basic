const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/users";

    //Middlewares
    this.middleware();

    //Rutas
    this.routes();
  }

  middleware() {
    //Cors
    this.app.use(cors());

    //Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto:`, this.port);
    });
  }
}

module.exports = Server;
