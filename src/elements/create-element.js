import { createDialog } from "./Dialog";
import { createButton } from "./button";
import { createLabel } from "./label";
import { createNewRow } from "./newrow";
import { createSeparator } from "./separator";
import { createShades } from "./shades";

const createElementMap = {
  dialog: createDialog,
  button: createButton,
  newrow: createNewRow,
  separator: createSeparator,
  label: createLabel,
  shades: createShades,
};

export default createElementMap;
