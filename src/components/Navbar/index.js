import React from "react";
import "./style.css";

function Navbar (props) {
    return (
        <nav className="navbar fixed-top">
            <div className="row container-fluid">
                <h3 className="nav-item logo">Clicky Game</h3>
                <h4 className="message nav-item col-6">{props.message}</h4>
                <h3 className="score nav-item">Score: {props.score} | High Score: {props.highScore}</h3>
            </div>
        </nav>
    );
};

export default Navbar;