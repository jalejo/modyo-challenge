import { useEffect, useState } from "react";

import { useUser } from "../contexts/UserContext";

import CardsGrid from './GameBoard/CardsGrid'
import ScoreBoard from './GameBoard/ScoreBoard';
import LabelMessage from './Elements/LabelMessage';
import Modal from './Elements/Modal';


import messagesList from './../assets/messages.json'

import { shuffleCards } from './../utils/helpers';
import LogoFull from "../assets/LogoFull";


const animalsCardsUrl = "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20"

function PlayGround() {

  const { user } = useUser();

  const [animalsList, setAnimalsList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null)
  const [flippingCard, setFlippingCard] = useState(false);
  const [matches, setMatches] = useState(0);
  const [misses, setMisses] = useState(0);
  const [labelMessage, setLabelMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    emoji: '',
    headline: '',
    cta: ''
  });


  const handleClose = () => {
    open && setOpen(false);
    resetAllMatch();
  };

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

      const randomAnimals = shuffleCards(jsonAnimalsData.entries, 9).map(animal => ({
        uuid: animal.fields.image.uuid,
        url: animal.fields.image.url,
        title: animal.fields.image.title,
        flipped: false,
        matched: false
      }));

      const joinedArrays = [...randomAnimals, ...randomAnimals];

      const gridAnimals = shuffleCards(joinedArrays, 18)

      setAnimalsList(gridAnimals.map((animal, index) => ({ ...animal, index })));

    } catch (error) {
      console.error("Error getting cards:", error);
    }
  };

  useEffect(() => {
    getCards();
  }, [])

  useEffect(() => {
    resetAllMatch();
  }, [ user.name ])

  const resetAllMatch = () => {
    setMatches( 0 );
    setMisses ( 0 );
    setLabelMessage(null);
    getCards();
  }
  
  useEffect(() => {
    
    if (matches >= 9 ) {
    
      setOpen(true);

      let completeHeadline = messagesList["headline"];
      completeHeadline = completeHeadline[Math.floor(Math.random() * completeHeadline.length)];

      let completeCTA = messagesList["callToAction"];
      completeCTA = completeCTA[Math.floor(Math.random() * completeCTA.length)];

      const modalMessage = {
        emoji: completeHeadline.emoji,
        headline: completeHeadline.message,
        cta: completeCTA.message
      };

      setModalMessage(modalMessage);
   
    }
  }, [matches]);


  const handleCard = animal => {

    if (animal.flipped) return;
    if (flippingCard) return;

    const handledIndex = animal.index;
    const updatedAnimalsList = [...animalsList];
    updatedAnimalsList[handledIndex] = { ...animal, flipped: true }

    setAnimalsList(updatedAnimalsList);

    if (selectedCard === null) {
      setSelectedCard(animal);
      setLabelMessage(null);
    } else if (selectedCard.uuid === animal.uuid) {
      setSelectedCard(null);
      setMatches(matches + 1);

      setLabelMessage("match");
      updatedAnimalsList[selectedCard.index] = { ...updatedAnimalsList[selectedCard.index], matched: true }
      updatedAnimalsList[animal.index] = { ...updatedAnimalsList[animal.index], matched: true }

    }
    else {
      setFlippingCard(true);
      setMisses(misses + 1);

      setLabelMessage("miss");
      setTimeout(() => {
        updatedAnimalsList[selectedCard.index] = { ...updatedAnimalsList[selectedCard.index], flipped: false }
        updatedAnimalsList[animal.index] = { ...updatedAnimalsList[animal.index], flipped: false }

        setAnimalsList(updatedAnimalsList);
        setSelectedCard(null);
        setFlippingCard(false);
      }, 1000)
    }
  }

  

  if (!user) {
    return false;
  }

  return (
    <div className="container mx-auto relative overflow-hidden ">
      <div className="text-center mx-auto w-full max-w-80 sm:max-w-4xl flex justify-center">
        <div className="w-40 mt-8 mb-2"><LogoFull /></div>
      </div>
      <ScoreBoard
        matches={matches}
        misses={misses}
        userName={ user?.name }
      />
      <LabelMessage
        labelMessage={labelMessage}
        messagesList={messagesList}
      />
      <CardsGrid
        animalsList={animalsList}
        handleCard={handleCard}
      />

      <Modal
        modalLabel="finished-game"
        open={open}
        handleClose={() => setOpen(false)}
      >

        <h3>{ modalMessage.emoji +" "+ modalMessage.headline }</h3>
        <h2 className="mb-6">{ user?.name  }</h2>
        <p className="mb-6">{  modalMessage.cta }</p>
        
        <div className="flex justify-center gap-x-3">
          <button
            type="button"
            className="regular-bottom regular-bottom__gradient"
            onClick={() => handleClose()}
          >
            Let&apos;s Do It
          </button>

          <button
            type="button"
            className="px-6 pb-2.5 pt-2.5 text-base font-medium leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 flex flex-col items-center rounded-lg
            hover:bg-gray-100 ease-in duration-300"
          >
            <span className="uppercase text-sm ">Maybe later</span>
            <span className=" text-xs">[Logout]</span>
          </button>
        </div>


      </Modal>

    </div>
  )
}

export default PlayGround
