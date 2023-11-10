import BaseElememt from "./baseElement";

export default class ButtonInstance extends BaseElememt {
  eventsMap = null;

  constructor(props, renderer) {
    super(props, renderer);

    this.eventsMap = {
      click: this.props?.onClick,
    };
    renderer.on(this.id, this.onEvent.bind(this));
  }

  onEvent(payload) {
    const { event, data } = payload;
    const handler = this.eventsMap[event];
    if (handler) {
      handler(data);
    }
  }

  render() {
    this.renderer.renderButton(this);
  }
}
