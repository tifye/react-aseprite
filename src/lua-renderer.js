import { sendToClient } from "./websocket";

export default class LuaRenderer {
  renderButton(button) {
    console.log("rendering button");

    const req = {
      method: "create",
      type: "button",
      id: button.id,
      data: {
        ...button.props,
      }
    }

    this.send(req)
  }

  renderDialog(dialog) {
    console.log("rendering dialog");

    const {children: _, ...data} = dialog.props;
    const req = {
      method: "create",
      type: "dialog",
      id: dialog.id,
      data 
    }
    
    this.send(req)

    for (let child of dialog.children) {
      child.render();
    }
  }

  send(req) {
    console.log("sending", req);
    sendToClient(JSON.stringify(req));
  }
}