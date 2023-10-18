import { WebSocketServer } from "ws";

let wss = null;
let client = null;

export function startServer() {
  return new Promise((resolve, reject) => {
    wss = new WebSocketServer({ port: 8081 });
    wss.on("listening", () => {
      console.log("Waiting for connection...");
      // resolve();
    });

    wss.on("connection", (ws) => {
      client = ws;
      
      ws.on("message", (data, isBinary) => {
        const json = data.toString("utf8");
        console.log("json", json);
      });
      
      ws.on("close", () => {
        console.log("closing connection");
        wss.close();
      });
      
      resolve();
    });
  });
}

export function sendToClient(data) {
  if (client) {
    client.send(data);
  }
}
