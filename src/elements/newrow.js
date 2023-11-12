export function createNewRow(context) {
  console.log("createNewRow");
  return new NewRow(context);
}

export default class NewRow {
  type = "newrow";

  constructor(context) {
    this.context = context;
  }

  appendToDialog(dialogId) {
    this.context.aseprite.create(this.type, "never", {
      dialogId,
    });
  }
}
