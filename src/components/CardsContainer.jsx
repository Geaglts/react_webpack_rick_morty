import React, { useState, useEffect } from "react";
import CardCharacter from "./CardCharacter";

import "@styles/CardsContainer.scss";

function CardsContainer() {
    const [characters, setCharacters] = useState([]);

    const data = async () => {
        const API_URL = process.env.API;
        const response = await fetch(API_URL);
        const data = await response.json();
        return setCharacters(data.results);
    };

    useEffect(() => {
        data();
    }, []);

    if (characters.length === 0) {
        return <p>loading</p>;
    }

    return (
        <div className="CardContainer__container">
            {characters.map((character) => {
                return (
                    <CardCharacter key={character.id} character={character} />
                );
            })}
        </div>
    );
}

export default CardsContainer;
