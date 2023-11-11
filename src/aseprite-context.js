let asepriteContext = null;

export default asepriteContext;

export function setAsepriteContext(ctx) {
  asepriteContext = ctx;
}

export class AsepriteContext {
  aseConn = null;

  constructor(aseConn) {
    this.aseConn = aseConn;
  }
}
