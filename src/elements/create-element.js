import { createDialog } from "./Dialog";
import { createButton } from "./button";

const createElementMap = {
  dialog: createDialog,
  button: createButton,
};

export default createElementMap;
