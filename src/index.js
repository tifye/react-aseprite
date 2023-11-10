import ReactAseprite from "./reactAseprite.js";
import Dialog from "./components/Dialog";
import Button from "./components/Button";
import UpdatingButton from "./customComponents/UpdatingButton";
import React from "react";
import { startServer } from "./websocket.js";

startServer()
  .then((ws) => {
    ReactAseprite.initialize(ws);

    ReactAseprite.render(
      <Dialog>
        <Button text="Mino" />
        <Button text="Hello" />
        <UpdatingButton />
      </Dialog>
    );
  })
  .catch((err) => {
    console.log("err", err);
  });
