import React from "react";
import "./style.css";

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-nav">
                <div className="nav-item">Clicky Game</div>
                <div className="message nav-item"></div>
                <div className="score nav-item"></div>
            </div>
        </nav>
    );
};

export default Navbar;