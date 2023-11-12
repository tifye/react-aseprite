import ReactAseprite from "./react-aseprite";
import AsepriteWebSocketConnection from "./websocket";
import { AsepriteContext, setAsepriteContext } from "./aseprite-context";
import App from "./test-components/App";
import React from "react";

async function main() {
  const socket = new AsepriteWebSocketConnection();
  await socket.connect();

  const context = new AsepriteContext(socket);
  setAsepriteContext(context);

  ReactAseprite.render(<App />);
}

main();
