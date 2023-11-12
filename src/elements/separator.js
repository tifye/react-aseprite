export function createSeparator(context, props) {
  console.log("createSeparator");
  const sep = new Separator(context, props);

  sep.text = props.text;

  return sep;
}

export default class Separator {
  type = "separator";
  text = "";

  constructor(context, id) {
    this.context = context;
    this.id = id;
  }

  appendToDialog(dialogId) {
    console.log("appending", this.type, "to", dialogId);
    this.context.aseprite.create(this.type, this.id, {
      dialogId,
      text: this.text,
    });
  }
}
