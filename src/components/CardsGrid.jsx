import Card from "./card";

const CardsGrid = ({ animalsList, handleCard }) => {

    return(
       
        <div 
            className="
                w-full max-w-80 sm:max-w-5xl mx-auto 
                grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4  
            ">
        {
            animalsList.map((animal, index) => (
                <Card 
                    key={`${animal.uuid}-${index}`}
                    animal = { animal }
                    handleCard = { handleCard } 
                />
            ))
        }
        </div>

    )
}

export default CardsGrid;