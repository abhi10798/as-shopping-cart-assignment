import React from "react";
import "./Card.css";

const Card = ({ id, name, description, imageUrl, buttonName }) => {

    return (
        <div className="card-container card-shadow alternate">
            <div className="card-image-box">
                <img src={`${imageUrl}`} alt={name} />
            </div>
            <div className="card-content-box">
                <div className="card-heading">
                    <h3>{name}</h3>
                </div>
                <div className="card-description">
                    <p>{description}</p>
                </div>
                <div className="card-button">
                    <button type="submit" id={id} >
                        Explore {buttonName}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;