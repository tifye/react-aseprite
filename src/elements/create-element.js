import { createDialog } from "./Dialog";
import { createButton } from "./button";
import { createNewRow } from "./newrow";

const createElementMap = {
  dialog: createDialog,
  button: createButton,
  newrow: createNewRow,
};

export default createElementMap;
