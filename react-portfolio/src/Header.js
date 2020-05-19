import React, { useContext } from 'react';
import TypeContext from "./utils/TypeContext"
import Letter from "./components/letter"

function Header() {
  
  const context = useContext(TypeContext)
  return (
    <section className="row">
      <div className="col-12">
        <div className="col-4" id="intro-container">
          <div className="col-12" id="intro-main">
            <Letter>

            </Letter>
          </div>
          <div className="col-12" id="intro-sub">

          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
