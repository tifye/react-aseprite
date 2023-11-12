import { getRandomId } from "../utils.js";

export function createShades(context, props) {
  console.log("createShades");
  const id = getRandomId();
  const shades = new Shades(context, id);

  Object.keys(props).forEach((name) => {
    const val = props[name];
    if (val !== undefined) {
      shades.props.set(name, val);
    }
  });

  return shades;
}

export default class Shades {
  type = "shades";

  constructor(context, id) {
    this.context = context;
    this.id = id;
    this.props = new Map();

    this.props.set("onclick", () => {});
    this.props.set("mode", "pick");

    this.eventsMap = {
      click: (data) => this.props.get("onclick")(data),
    };

    this.context.aseprite.on(this.id, this.onEvent.bind(this));
  }

  onEvent(payload) {
    const { event, data } = payload;
    const handler = this.eventsMap[event];
    if (handler) {
      handler(data);
    }
  }

  appendToDialog(dialogId) {
    console.log("appending", this.type, "to", dialogId);
    this.context.aseprite.create(this.type, this.id, {
      dialogId,
      ...this.getProps(),
    });
  }

  updateProps(props) {
    Object.keys(props).forEach((name) => {
      const val = props[name];
      if (val !== undefined) {
        this.props.set(name, val);
      }
    });
    this.context.aseprite.update(this.type, this.id, this.getProps());
  }

  getProps() {
    const props = {};
    this.props.forEach((val, key) => {
      props[key] = val;
    });
    return props;
  }
}
