import React from "react";
import { NavLink } from 'react-router-dom';

const Vtac = () => {
  return (
    <div>
      <div className="bookshelf">
        <div className="shelf">
          <div className="row-1">
            <div className="loc">
              <NavLink to='/document' activeClassName="nav-isActive">
                <div className="sample thumb1" sample="steve-jobs"></div>
              </NavLink>
              <NavLink to='/document' activeClassName="nav-isActive">
                <div className="sample thumb2" sample="html5"></div>
              </NavLink>
              <NavLink to='/librairie' activeClassName="nav-isActive">
                <div className="sample thumb3" sample="docs"></div>
              </NavLink>
            </div>
          </div>
          <div className="row-2">
            <div className="loc">
              <NavLink to='/document' activeClassName="nav-isActive">
                <div className="sample thumb4" sample="magazine1"></div>
              </NavLink>
              <NavLink to='/librairie' activeClassName="nav-isActive">
                <div className="sample thumb5" sample="magazine2"></div>
              </NavLink>
              <NavLink to='/document' activeClassName="nav-isActive">
                <div className="sample thumb6" sample="magazine3"></div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="suggestion">
          &uarr; Cliquez sur un catalogue pour le lire
        </div>
      </div>
    </div>
  );
};

export default Vtac;
