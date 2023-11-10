import { sendToClient } from "./websocket";
import EventEmitter from "events";

export default class LuaRenderer {
  eventEmitter = null;
  ws = null;

  constructor(ws) {
    this.eventEmitter = new EventEmitter();
    this.ws = ws;
    this.ws.on("message", (data, isBinary) => {
      const json = data.toString("utf8");
      console.log("json", json);
      const req = JSON.parse(json);
      const payload = {
        event: req.event,
        data: req.data,
      };
      console.log("emitting", req.id, payload);
      this.eventEmitter.emit(req.id, payload);
    });
  }

  on(id, listener) {
    this.eventEmitter.on(id, listener);
  }

  renderButton(button) {
    console.log("rendering button");

    const req = {
      method: "create",
      type: "button",
      id: button.id,
      data: {
        ...button.props,
      },
    };

    this.send(req);
  }

  renderDialog(dialog) {
    console.log("rendering dialog");

    const { children: _, ...data } = dialog.props;
    const req = {
      method: "create",
      type: "dialog",
      id: dialog.id,
      data,
    };

    this.send(req);

    for (let child of dialog.children) {
      child.render();
    }
  }

  send(req) {
    console.log("sending", req);
    sendToClient(JSON.stringify(req));
  }
}
