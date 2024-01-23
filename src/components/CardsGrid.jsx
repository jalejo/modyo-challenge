import { useEffect, useState } from "react";
import Card from "./card";

const animalsCardsUrl = "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20"

const CardsGrid = () => {

    const [animalsList, setAnimalsList] = useState([]);
    useEffect(() => {
        const getCards = async () => {
            try {
                const response = await fetch( animalsCardsUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                } );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const jsonAnimalsData = await response.json();

                const randomAnimals = getRandomAnimals( jsonAnimalsData.entries, 8 );
                setAnimalsList( randomAnimals ); 

            } catch ( error ){
                console.error("Error getting cards:", error );
            }
        };
    
        getCards();
    },[] )    


    const getRandomAnimals = ( arr, num ) => {
        const shuffledAnimals = arr.sort(() => 0.5 - Math.random() );
        return shuffledAnimals.slice( 0, num );
    };

    return(
        <div>
            grid
            {
                
                animalsList.map((animal) => (
                    <div key={animal.fields.image.uuid}>{animal.fields.image.title}</div>
                ))
            }
            <Card />
        </div>
    )
}

export default CardsGrid;