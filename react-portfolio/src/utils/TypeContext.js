import React from "react";
// default context object with properties corresponding to Provider values

const TypeContext = React.createContext({
    letter: ""
    // elemList: [],
    // elem: this,
    // display: false,
    // scrolled: false,
    // text: "",
    // inView: () => undefined,
    // getElems: () => undefined,
    // typeWrite: () => undefined
});

export default TypeContext;