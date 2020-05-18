import React from "react";
// default context object with properties corresponding to Provider values

const TypeContext = React.createContext({
  display: false,
  inView: () => undefined,
  scrolled: false,
  text: "",
  typeWrite: () => undefined
});

export default TypeContext;