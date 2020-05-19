import React, { useState, useEffect } from "react";
import TypeContext from "./utils/TypeContext"
import Header from "./Header"


function App() {

    const [InitialState, setInitialState] = useState({
          letter: ""
        // elemList: [],
        // elem: "",
        // display: false,
        // scrolled: false,
        // text: "",
        // getElems: getElemsToType,
        // inView: isScrolledIntoView,
        // typeWrite: printSentence
      });
    
    //   function printSentence(id, sentence, speed) {
    //     var index = 0,
    //         timer = setInterval(function() {
    //       var char = sentence.charAt(index);
    //       if(char === '<') {
    //         index = sentence.indexOf('>' , index)
    //       }
    //       document.getElementById(id).innerHTML = sentence.substr(0, index);
    //       if(++index === sentence.length){
    //         clearInterval(timer);
    //       }
    //     }, speed);
    //   } 

      useEffect( () => {
        
      }, [])

    //   function isScrolledIntoView($elem, $window) {
    //     var docViewTop = $window.scrollTop();
    //     var docViewBottom = docViewTop + $window.height();
    //     var elemTop = $elem.offset().top;
    //     var elemBottom = elemTop + $elem.height();
    //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    // }
    
    // function getElemsToType(classes){
    //     let classList = document.getElementsByClassName(classes)
    //     console.log(classList)
    //     return setInitialState(
    //         {
    //             ...InitialState, elemList: classList
    //         }
    //     )
    // }


    return (
        <TypeContext.Provider value={}>
            <Header>

            </Header>
        </TypeContext.Provider>
    )
}

export default App;