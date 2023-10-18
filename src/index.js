import ReactAseprite from "./reactAseprite.js";
import Dialog from "./components/Dialog";
import Button from "./components/Button";
import React from "react";
import { startServer } from "./websocket.js";

startServer()
  .then(() => {
    ReactAseprite.render(
      <Dialog>
        <Button text="Mino"/>
        <Button text="Hello"/>
        <Button text="to"/>
        <Button text="Izzy"/>
        <Button text="from NodeJs"/>
      </Dialog>
    );
  })
  .catch((err) => {
    console.log("err", err);
  });
