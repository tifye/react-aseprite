import ReactReconciler from "react-reconciler";
import HostConfig from "./host-config.js";
import { LegacyRoot } from "react-reconciler/constants.js";

const reconciler = ReactReconciler(HostConfig);

const ReactAseprite = {
  render(dialog) {
    console.log("ReactAseprite.render");

    // Don't know what tag means
    const root = reconciler.createContainer(
      { root: true },
      LegacyRoot,
      null,
      false,
      false,
      ""
    );
    reconciler.updateContainer(dialog, root, null, null);
  },
};

export default ReactAseprite;
