import React from "react";
import "./style.css";

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                <div className="logo navbar-brand">Clicky Game</div>
                <div className="message nav-item"></div>
                <div className="score nav-item"></div>
            </div>
        </nav>
    );
};

export default Navbar;