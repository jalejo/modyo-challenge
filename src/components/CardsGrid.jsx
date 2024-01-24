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

                const randomAnimals = getRandomAnimals( jsonAnimalsData.entries, 9 );

                const joinedArrays = [...randomAnimals, ...randomAnimals];
                
                const gridAnimals = getRandomAnimals( joinedArrays, 18 )

                setAnimalsList( gridAnimals ); 

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
            <div className="grid grid-cols-6">
            {
                animalsList.map((animal, index) => (
                    <div key={`${animal.fields.image.uuid}-${index}`}>
                        {animal.fields.image.title}
                        <img 
                            src={animal.fields.image.url}
                            alt={animal.fields.image.title}
                        />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default CardsGrid;