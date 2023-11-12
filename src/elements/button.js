const { getRandomId } = require("../utils");

export function createButton(context, props) {
  console.log("createButton");
  const id = getRandomId();
  const button = new Button(context, id);

  ["text", "onclick", "label", "focus", "visible", "selected"].forEach(
    (name) => {
      const val = props[name];
      if (val !== undefined) {
        button[name] = val;
      }
    }
  );

  return button;
}

export default class Button {
  type = "button";
  text = "";
  onclick = () => {};
  label = "";
  focus = false;
  visible = true;
  selected = false;

  constructor(context, id) {
    this.context = context;
    this.id = id;

    this.eventsMap = {
      click: () => this.onclick(),
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

  appendToDialog(dialogId) {
    console.log("appending", this.type, "to", dialogId);
    this.context.aseprite.create(this.type, this.id, {
      dialogId,
      text: this.text,
      label: this.label,
      focus: this.focus,
      visible: this.visible,
      selected: this.selected,
    });
  }
}
