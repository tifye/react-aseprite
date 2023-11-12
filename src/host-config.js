import { asepriteContext } from "./aseprite-context";

const hostConfig = {
  supportsMutation: true,
  noTimeout: -1,
  supportsMicrotasks: false,
  isPrimaryRenderer: true,
  createInstance,
  createTextInstance,
  appendInitialChild,
  appendChild,
  appendChildToContainer,
  finalizeInitialChildren,
  getChildHostContext,
  getPublicInstance,
  getRootHostContext,
  prepareForCommit,
  resetAfterCommit,
  prepareUpdate,
  commitUpdate,
  shouldSetTextContent,
  clearContainer,
};

function createInstance(
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle
) {
  console.log("createInstance");
  const element = asepriteContext.createElement(type, props);
  return element;
}

function createTextInstance(
  text,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle
) {
  console.log("createTextInstance", text);
  throw new Error("raw text not supported");
}

function appendInitialChild(parentElement, child) {
  console.log("appendInitialChild");
  parentElement.appendChild(child);
}

function appendChild(parentElement, child) {
  console.log("appendChild");
  parentElement.appendChild(child);
}

function appendChildToContainer(container, child) {
  console.log("appendChildToContainer");
  if (container.root && child.type !== "dialog") {
    throw new Error("only dialogs can be root elements");
  }

  child.show();
}

function prepareUpdate(
  instance,
  type,
  oldProps,
  newProps,
  rootContainerInstance,
  hostContext
) {
  console.log("prepareUpdate");

  const payload = {};
  Object.keys(newProps).forEach((key) => {
    if (key === "children") {
      return;
    }

    if (oldProps[key] !== newProps[key]) {
      payload[key] = newProps[key];
    }
  });

  if (Object.keys(payload).length === 0) {
    return null;
  }

  return payload;
}

function commitUpdate(
  instance,
  updatePayload,
  type,
  oldProps,
  newProps,
  finishedWork
) {
  console.log("updatePayload", updatePayload);
  try {
    instance.updateProps(updatePayload);
  } catch (e) {
    console.log("failed commitUpdate for", instance.id, instance.type);
    throw new Error(e);
  }
}

function finalizeInitialChildren(
  parentInstance,
  type,
  props,
  rootContainerInstance,
  hostContext
) {}

function getChildHostContext(parentHostContext, type, rootContainerInstance) {
  return {
    type,
  };
}

function getPublicInstance(instance) {}

function getRootHostContext(rootContainerInstance) {}

function prepareForCommit(containerInfo) {}

function resetAfterCommit(containerInfo) {}

function shouldSetTextContent(type, props) {
  return false;
}

function clearContainer(container) {}

export default hostConfig;
