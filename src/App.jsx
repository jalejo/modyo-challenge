import './App.css'
import { useEffect, useState } from "react";

import CardsGrid from './components/CardsGrid'


const animalsCardsUrl = "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20"

function App() {

  const [animalsList, setAnimalsList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null)
  const [flippingCard, setFlippingCard] = useState(false);


  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await fetch(animalsCardsUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonAnimalsData = await response.json();

        const randomAnimals = shuffleCards(jsonAnimalsData.entries, 9).map( animal => ({
          uuid: animal.fields.image.uuid,
          url: animal.fields.image.url,
          title: animal.fields.image.title,
          flipped: false,
        }));

        const joinedArrays = [...randomAnimals, ...randomAnimals];

        const gridAnimals = shuffleCards(joinedArrays, 18)

        setAnimalsList( gridAnimals.map( ( animal, index ) => ({ ...animal, index }) ) );

      } catch (error) {
        console.error("Error getting cards:", error);
      }
    };

    getCards();
  }, [])


  const shuffleCards = (arr, num) => {
    const shuffledAnimals = arr.sort(() => 0.5 - Math.random());
    return shuffledAnimals.slice(0, num);
  };

  const handleCard =  animal  => {

    if ( animal.flipped ) return;
    if ( flippingCard ) return;

    
    const handledIndex = animal.index;
    const updatedAnimalsList = [ ...animalsList ];
    updatedAnimalsList[ handledIndex ] = { ...animal, flipped: true }

    setAnimalsList( updatedAnimalsList );

    selectedCard === null ? setSelectedCard( animal ) :
    selectedCard.uuid === animal.uuid ? setSelectedCard( null ) 
    //selectedCard.index === animal.index ? setSelectedCard( animal )
    :( 
      setFlippingCard(true),
      setTimeout(() => {
      
        updatedAnimalsList[ selectedCard.index ] = { ...updatedAnimalsList[selectedCard.index], flipped: false }
        updatedAnimalsList[ animal.index ] = { ...updatedAnimalsList[animal.index], flipped: false }

        setAnimalsList( updatedAnimalsList );
        setSelectedCard( null );
        setFlippingCard( false );
      }, 1000)
    )
  }

  return (
    <div className="container mx-auto">

      <h1>Match Modyo</h1>

      <CardsGrid 
        animalsList = { animalsList }
        handleCard = { handleCard }
      />

    </div>
  )
}

export default App
