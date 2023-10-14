import ReactAseprite from "./reactAseprite.js";
import Dialog from "./components/Dialog";
import Button from "./components/Button";
import React from "react";
import { startServer } from "./websocket.js";

startServer()
  .then(() => {
    ReactAseprite.render(
      <Dialog>
        <Button />
      </Dialog>
    );
  })
  .catch((err) => {
    console.log("err", err);
  });
