import { getRandomId } from "../utils";

export function createDialog(context, props) {
  console.log("createDialog");
  const id = getRandomId();
  const dialog = new Dialog(context, id);

  ["title", "notitlebar", "parent", "onclose"].forEach((name) => {
    dialog[name] = props[name];
  });

  dialog.create();
  return dialog;
}

export default class Dialog {
  type = "dialog";
  title = "";
  notitlebar = false;
  parent = null;
  onclose = () => {};

  constructor(context, id) {
    this.context = context;
    this.id = id;

    this.eventsMap = {
      close: () => this.onclose(),
    };

    this.context.aseprite.on(this.id, this.onEvent.bind(this));
  }

  onEvent(payload) {
    const { event, data } = payload;
    const handler = this.eventsMap[event];
    if (handler) {
      handler(data);
    }
  }

  appendChild(child) {
    console.log("appending", child.type, "to", this.id);
    child.appendToDialog(this.id);
  }

  show() {
    this.context.aseprite.act("show", this.type, this.id);
  }

  create() {
    this.context.aseprite.create(this.type, this.id, {
      title: this.title,
      notitlebar: this.notitlebar,
      parent: this.parent,
    });
  }
}
