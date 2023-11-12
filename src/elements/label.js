import { getRandomId } from "../utils";

export function createLabel(context, props) {
  console.log("createLabel");
  const id = getRandomId();
  const label = new Label(context, id);
  label.text = props.text;
  label.label = props.label;
  return label;
}

export default class Label {
  type = "label";
  text = "";
  label = "";

  constructor(context, id) {
    this.context = context;
    this.id = id;
  }

  appendToDialog(dialogId) {
    console.log("appending", this.type, "to", dialogId);
    this.context.aseprite.create(this.type, this.id, {
      dialogId,
      text: this.text,
      label: this.label,
    });
  }

  updateProps(props) {
    Object.keys(props).forEach((name) => {
      const val = props[name];
      if (val !== undefined && this[name] !== undefined) {
        this[name] = val;
      }
    });
    this.context.aseprite.update(this.type, this.id, this.getProps());
  }

  getProps() {
    return {
      text: this.text,
      label: this.label,
    };
  }
}
