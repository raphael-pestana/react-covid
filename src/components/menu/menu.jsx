import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import {useState} from 'react';

import Home from '../../pages/home';
import Tips from '../../pages/tips';
import Tracker from '../../pages/tracker';

import './menuStyle.css';

function Menu() {
    const [pie, setPie] = useState("");

    const handleClick = () => {      

        if(pie === "active") {
            setPie("");
        }
        else {
            setPie("active");
        }       
    }


    return(
    <div className={pie}>
        
        <div className="pie pie1" onClick={handleClick}>
        <NavLink to="/tracker" className="nav-link" activeClassName="active">
            <div className="pie-color pie-color1">
                <div className="trackerIcon">
                    <i className="fas fa-chart-bar"/>
                </div>
            </div>
        </NavLink>
        </div>
        <div className="pie pie2" onClick={handleClick}>
        <NavLink to="/tips" className="nav-link" activeClassName="active">
            <div className="pie-color pie-color2">
                <div className="tipsIcon">
                    <i className="fas fa-plus-circle"></i>
                </div> 
            </div>
        </NavLink>
        </div>
        <div className="pie pie3" onClick={handleClick}>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
            <div className="pie-color pie-color3">
                <div className="homeIcon">
                    <i className="fas fa-home"></i>
                </div> 
            </div>
        </NavLink>
        </div>
        <div className="menu" onClick={handleClick}>
           <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <g
                fill="none"
                stroke="#000"
                strokeWidth="7.999"
                strokeLinecap="round"
              >
                <path d="M 55,26.000284 L 24.056276,25.999716" />
                <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
                <path d="M 45,73.999716 L 75.943724,74.000284" />
                <path d="M 75.943724,26.000284 L 45,25.999716" />
                <path d="M 24.056276,73.999716 L 55,74.000284" />
              </g>
            </svg>
        </div>
      
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tips" component={Tips} />
            <Route path="/tracker" component={Tracker} />
        </Switch>
         
    </div>
  );
}
export default Menu;

        // <div className="main-menu">                                  
        //     <ul>
        //         <li>
        //             <NavLink exact to="/" className="nav-link" activeClassName="active">
        //             Home
        //             </NavLink> 
        //         </li>
                
        //         <li>
        //             <NavLink to="/tips" className="nav-link" activeClassName="active">
        //             Tips 
        //             </NavLink>
        //         </li>

        //         <li>
        //             <NavLink to="/tracker" className="nav-link" activeClassName="active">
        //             Tracker 
        //             </NavLink>
        //         </li>
        //     </ul>

            
            

       

  