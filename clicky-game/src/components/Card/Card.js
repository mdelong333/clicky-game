import React from "react";
import "./style.css";

function Card (props) {
    return (
        <div className="card">
            <img className="img card-height" src={props.image} alt={props.name}/>
        </div>
    );
}

export default Card;