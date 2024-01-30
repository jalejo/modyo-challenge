import PropTypes from 'prop-types';
import Card from "./Card";

const CardsGrid = ({ animalsList, handleCard }) => {

    return(
       
        <div className="
            w-full max-w-80 sm:max-w-4xl mx-auto 
            grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-4  
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

CardsGrid.propTypes = {
    animalsList: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            flipped: PropTypes.bool.isRequired,
            matched: PropTypes.bool.isRequired,
            index: PropTypes.number.isRequired,
        })
    ).isRequired,
    handleCard: PropTypes.func.isRequired,
};

export default CardsGrid;