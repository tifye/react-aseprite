import BaseElememt from "./baseElement";

export default class ButtonInstance extends BaseElememt {
  render() {
    this.renderer.renderButton(this);
  }
}
