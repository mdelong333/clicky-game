import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Sailor Moon Clicky Game!</h1>
                <br/>
                <br/>
                <p className="lead">Click on an image to earn points, but don't click any image more than once!</p>
            </div>
        </div>
    )
}

export default Jumbotron;