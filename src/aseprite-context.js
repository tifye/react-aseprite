import createElementMap from "./elements/create-element";

let asepriteContext = null;

export { asepriteContext };

export function setAsepriteContext(ctx) {
  console.log("setting aseprite context");
  asepriteContext = ctx;
}

export class AsepriteContext {
  aseprite = null;

  constructor(aseConn) {
    this.aseprite = aseConn;
  }

  createElement(type, props) {
    console.log("createElement", type);
    const createFn = createElementMap[type];
    if (!createFn) {
      throw new Error(`unknown element type ${type}`);
    }
    return createFn(this, props);
  }
}
