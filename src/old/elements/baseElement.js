export default class BaseElememt {
  type = "BaseElement";
  children = [];
  props = {};
  renderer = null;
  id = null;

  constructor(props, renderer) {
    this.props = props;
    this.renderer = renderer;
    this.id = Math.random().toString(36).substring(7);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  render() {
    console.log("rendering " + this.type);
  }
}
