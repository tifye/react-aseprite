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
  console.log("appendInitialChild");
}

function appendChild(parentInstance, child) {
  console.log("appendChild");
}

function appendChildToContainer(container, child) {
  console.log("appendChildToContainer");
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
}

function commitUpdate(
  instance,
  updatePayload,
  type,
  oldProps,
  newProps,
  finishedWork
) {
  console.log("commitUpdate");
}

function finalizeInitialChildren(
  parentInstance,
  type,
  props,
  rootContainerInstance,
  hostContext
) {
  console.log("finalizeInitialChildren");
}

function getChildHostContext(parentHostContext, type, rootContainerInstance) {
  console.log("getChildHostContext");
}

function getPublicInstance(instance) {
  console.log("getPublicInstance");
}

function getRootHostContext(rootContainerInstance) {
  console.log("getRootHostContext");
}

function prepareForCommit(containerInfo) {
  console.log("prepareForCommit");
}

function resetAfterCommit(containerInfo) {
  console.log("resetAfterCommit");
}

function shouldSetTextContent(type, props) {
  console.log("shouldSetTextContent");
}

function clearContainer(container) {
  console.log("clearContainer");
}

export default hostConfig;
