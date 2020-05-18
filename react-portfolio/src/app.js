import React, { useState, useEffect } from "react";
import TypeContext from "./utils/TypeContext"
import Header from "./Header"

function App() {

    const [InitialState, setInitialState] = useState({
        display: false,
        inView: () => undefined,
        scrolled: false,
        text: "",
        typeWrite: () => undefined
      });
    
      function printSentence(id, sentence, speed) {
        var index = 0,
            timer = setInterval(function() {
          var char = sentence.charAt(index);
          if(char === '<') {
            index = sentence.indexOf('>' , index)
          }
          document.getElementById(id).innerHTML = sentence.substr(0, index);
          if(++index === sentence.length){
            clearInterval(timer);
          }
        }, speed);
      } 

      function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    


    return (
        <TypeContext.Provider value={InitialState}>
            <Header>

            </Header>
        </TypeContext.Provider>
    )
}

export default App;