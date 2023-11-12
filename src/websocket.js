import { WebSocketServer } from "ws";
import { EventEmitter } from "events";

export default class AsepriteWebSocketConnection {
  constructor() {
    this.eventEmitter = new EventEmitter();
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

  handleMessage(rawData) {
    const json = rawData.toString("utf8");
    console.log("json", json);
    const req = JSON.parse(json);
    const payload = {
      event: req.event,
      data: req.data,
    };
    console.log("emitting", req.id, payload);
    this.eventEmitter.emit(req.id, payload);
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.server.on("connection", (ws) => {
        console.log("connection established");

        this.client = ws;
        ws.on("close", this.onClose.bind(this));
        ws.on("message", this.handleMessage.bind(this));

        resolve();
      });
    });
  }

  create(type, id, data) {
    const req = {
      method: "create",
      type,
      id,
      data,
    };

    this.send(req);
  }

  act(action, type, id, data) {
    const req = {
      method: "action",
      action,
      type,
      id,
      data,
    };

    this.send(req);
  }

  update(type, id, data) {
    const req = {
      method: "update",
      type,
      id,
      data,
    };

    this.send(req);
  }

  on(id, listener) {
    this.eventEmitter.on(id, listener);
  }

  send(req) {
    console.log("sending", req);
    this.client.send(JSON.stringify(req));
  }
}
