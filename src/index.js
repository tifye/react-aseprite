import ReactAseprite from "./react-aseprite";
import React from "react";
import AsepriteWebSocketConnection from "./websocket";
import { AsepriteContext, setAsepriteContext } from "./aseprite-context";

async function main() {
  const socket = new AsepriteWebSocketConnection();
  await socket.connect();

  const context = new AsepriteContext(socket);
  setAsepriteContext(context);

  ReactAseprite.render(<none></none>);
}

main();
