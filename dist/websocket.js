"use strict";

var _ws = require("ws");
const wss = new _ws.WebSocketServer({
  port: 8081
});
wss.on("connection", ws => {
  ws.on("message", (data, isBinary) => {
    console.log("message", isBinary, data);
    ws.send("hello from node server");
    const json = data.toString("utf8");
    console.log("json", json);
  });
  ws.on("close", () => {
    console.log("closing connection");
    wss.close();
  });
});