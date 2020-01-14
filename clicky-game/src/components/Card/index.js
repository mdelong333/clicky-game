import React from "react";
import "./style.css";

const Card = props => (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <img className="img" src={props.image} alt={props.name} />
    </div>
);

export default Card;