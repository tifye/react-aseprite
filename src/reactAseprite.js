import ReactReconciler from "react-reconciler";
import { DefaultEventPriority } from "react-reconciler/constants.js";

const HostConfig = {
  supportsMutation: false,
  supportsPersistence: true,
  noTimeout: -1,
  supportsMicrotasks: false,
  isPrimaryRenderer: true,
  createInstance,
  createTextInstance,
  appendInitialChild,
  finalizeInitialChildren,
  shouldSetTextContent,
  getRootHostContext,
  getChildHostContext,
  getPublicInstance,
  prepareForCommit,
  resetAfterCommit,
  prepareUpdate,
  scheduleTimeout,
  cancelTimeout,
  getCurrentEventPriority,
  // scheduleMicrotask,
  // Persistence
  cloneInstance,
  createContainerChildSet,
  appendChildToContainerChildSet,
  finalizeContainerChildren,
  replaceContainerChildren,
  cloneHiddenInstance,
  cloneHiddenTextInstance,
};

const reconciler = ReactReconciler(HostConfig);

const ReactAseprite = {
  render(element) {
    const rootElement = { mino: "meep" };
    const root = reconciler.createContainer(rootElement, false, false);
    reconciler.updateContainer(element, root, null, null);
  },
};

function createInstance(
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle
) {
  console.log("createInstance", type, props);
}

function createTextInstance(
  text,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle
) {
  console.log("createTextInstance", text);
}

function appendInitialChild(parentInstance, child) {
  console.log("appendInitialChild", parentInstance, child);
}

function finalizeInitialChildren(
  parentInstance,
  type,
  props,
  rootContainerInstance,
  hostContext
) {
  console.log("finalizeInitialChildren", parentInstance, type, props);
}

function shouldSetTextContent(type, props) {
  console.log("shouldSetTextContent", type, props);
}

function getRootHostContext(rootContainerInstance) {
  console.log("getRootHostContext", rootContainerInstance);
}

function getChildHostContext(parentHostContext, type, rootContainerInstance) {
  console.log("getChildHostContext", parentHostContext, type);
}

function getPublicInstance(instance) {
  console.log("getPublicInstance", instance);
}

function prepareForCommit(containerInfo) {
  console.log("prepareForCommit", containerInfo);
}

function resetAfterCommit(containerInfo) {
  console.log("resetAfterCommit", containerInfo);
}

function prepareUpdate(instance, type, oldProps, newProps, hostContext) {
  console.log("prepareUpdate", instance, type, oldProps, newProps);
}

function scheduleTimeout(fn, delay) {
  console.log("scheduleTimeout", fn, delay);
}

function cancelTimeout(id) {
  console.log("cancelTimeout", id);
}

function getCurrentEventPriority() {
  console.log("getCurrentEventPriority");
  return DefaultEventPriority;
}

function cloneInstance(
  instance,
  updatePayload,
  type,
  oldProps,
  newProps,
  internalInstanceHandle,
  keepChildren,
  recyclableInstance
) {
  console.log(
    "cloneInstance",
    instance,
    updatePayload,
    type,
    oldProps,
    newProps
  );
}

function createContainerChildSet(container) {
  console.log("createContainerChildSet", container);
}

function appendChildToContainerChildSet(childSet, child) {
  console.log("appendChildToContainerChildSet", childSet, child);
}

function finalizeContainerChildren(container, newChildren) {
  console.log("finalizeContainerChildren", container, newChildren);
}

function replaceContainerChildren(container, newChildren) {
  console.log("replaceContainerChildren", container, newChildren);
}

function cloneHiddenInstance(instance, type, props, internalInstanceHandle) {
  console.log("cloneHiddenInstance", instance, type, props);
}

function cloneHiddenTextInstance(text, internalInstanceHandle) {
  console.log("cloneHiddenTextInstance", text);
}

// function cloneHiddenTextInstance(instance, text, internalInstanceHandle) {
//   console.log("cloneHiddenTextInstance", instance, text);
// }

export default ReactAseprite;
