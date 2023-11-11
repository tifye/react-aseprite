import { WebSocketServer } from "ws";

export default class AsepriteWebSocketConnection {
  server = null;
  client = null;

  constructor() {
    this.server = new WebSocketServer({ port: 8081 });
    this.server.on("listening", this.onListening.bind(this));
  }

  onListening() {
    console.log("Waiting for connection...");
  }

  onClose() {
    console.log("closing connection");
    this.server.close();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.server.on("connection", (ws) => {
        console.log("connection established");

        this.client = ws;
        ws.on("close", this.onClose.bind(this));

        resolve();
      });
    });
  }
}
