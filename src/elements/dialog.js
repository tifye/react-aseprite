import BaseElememt from "./baseElement";

export default class DialogInstance extends BaseElememt {
  render() {
    this.renderer.renderDialog(this)
  }
}
