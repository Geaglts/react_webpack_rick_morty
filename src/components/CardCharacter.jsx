import React from "react";

function CardCharacter({ character }) {
    return (
        <div className="Card__character--container">
            <img
                className="Card__character--img"
                src={`${character.image}`}
                alt={`Image of ${character.name}`}
            />
            <div className="Card__character--info">
                <h3 className="Card__character--name">{character.name}</h3>
                <p className="Card__character--gender">{character.gender}</p>
                <p className="Card__character--status">{character.status}</p>
            </div>
        </div>
    );
}

export default CardCharacter;
