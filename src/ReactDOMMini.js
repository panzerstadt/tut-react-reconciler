// import the guts of react
import ReactReconciler from "react-reconciler";

let reconciler = ReactReconciler({
  // configs for how to talk to the host environment
  // aka host config
  supportsMutation: true,

  // 1. make stuff
  createInstance: (
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) => {
    // this gets called whenever there is a new host component
    // that we wanna put on the screen
    // we kinda only care about type and props
    // type is html tag element name
    // props is all element props (html + react)
    console.log(type, props);
    let el = document.createElement(type);
    if (props.className) el.className = props.className;
    if (props.src) el.src = props.src;

    // react reconciler doesn't have the notion of what a DOM or any host env is,
    // and returning this merely allows the reconciler to pass it back to
    // us at other functions to do stuff with them later.
    // react doesn't care AT ALL the shape of this return value
    return el;
  },
  createTextInstance: (
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) => {
    // a text instance is the bit between the elements, when you have
    // text strings
    // e.g. <div>Click Here! <button/></div> --> the "Click Here!" is the what this function handles
    return document.createTextNode(text);
  },

  // 2. connect stuff to containers
  appendChildToContainer: (container, child) => {
    container.appendChild(child);
  },
  appendChild: (container, child) => {
    container.appendChild(child);
  },
  appendInitialChild: (container, child) => {
    container.appendChild(child);
  },

  prepareUpdate: (
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) => {},

  commitUpdate: (
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle
  ) => {},
  finalizeInitialChildren: () => {},
  getChildHostContext: () => {},
  getPublicInstance: () => {},
  getRootHostContext: () => {},
  prepareForCommit: () => {},
  resetAfterCommit: () => {},

  shouldSetTextContent: () => {
    return false;
  }
});

let ReactDOMMini = {
  render: (whatToRender, div) => {
    let container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, e =>
      console.log("container updated!", e)
    );
  }
};

export default ReactDOMMini;
