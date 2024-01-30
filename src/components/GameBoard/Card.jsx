import PropTypes from 'prop-types';
import LogoM from '../../assets/LogoM';


const Card = ({ animal, handleCard }) => {
    return(
        
        <div 
            className={`
                card
                ${ animal.flipped ? 'card-flipped ' : '' }
                ${ animal.matched ? 'grayscale' : '' }
                w-full aspect-[1/1.25] card-wrapper cursor-pointer
                group [perspective:1000px]
            `}
            onClick={ () => ( handleCard( animal ) ) }
        >
            <div 
                className={`
                    card__inner
                    relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${ animal.flipped ? '[transform:rotateY(180deg)]' : '' }
                `}
            >
                <div className="
                    card__face card__face--back
                    rounded-lg  overflow-hidden ring-1 ring-slate-300 shadow-lg
                    absolute w-full h-full [transform:rotateY(180deg)]
                ">
                    <img 
                        loading="lazy"
                        className="w-full h-full object-cover" 
                        src={ animal.url }
                        alt={ animal.title } 
                    />
                </div>
                <div className="
                    card__face card__face--front
                    rounded-lg  overflow-hidden ring-1 ring-slate-300 shadow-lg
                    absolute w-full h-full bg-blue-challenge [backface-visibility:hidden] flex items-center justify-center
                ">
                    <LogoM 
                        color='#FFFFFF'
                    />
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    animal: PropTypes.shape({
        flipped: PropTypes.bool.isRequired,
        matched: PropTypes.bool.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    handleCard: PropTypes.func.isRequired,
};

export default Card;