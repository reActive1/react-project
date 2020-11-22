import React from "react";
import "./CssComponents/Sidebar.css";
import {SidebarData} from './SidebarData';
import {useHistory} from 'react-router-dom';

function Sidebar() {
    const history = useHistory();
    return (
    <div className= "Sidebar">
        <ul className="SidebarList">
        {SidebarData.map((val, key) => {
        return (
        <li
         key= {key} 
         className="row"
         id={window.location.pathname === val.link ? "active" : ""}
         onClick={ ()=> {history.push(val.link); window.location.pathname = val.link;}}>
            {" "}
            <div id="icon"> {val.icon} </div>
            <div id="title"> {val.title} </div>
        </li>
        );
          })}
        </ul>
        </div>
    );
}

export default Sidebar;