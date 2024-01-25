const Card = ({ animal, handleCard }) => {

    return(
        
        <div 
            className={`
                ${ animal.flipped ? 'card-flipped' : '' }
                w-full aspect-[1/1.25] card-wrapper
                group [perspective:1000px]
            `}
            onClick={ () => ( handleCard( animal ) ) }
        >


            <div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${ animal.flipped ? '[transform:rotateY(180deg)]' : '' }`}>

                <div className="
                    rounded-lg  overflow-hidden ring-1 ring-slate-300 shadow-lg
                    absolute w-full h-full [transform:rotateY(180deg)]
                ">
                    <img 
                        className="w-full h-full object-cover" 
                        src={ animal.url }
                        alt={ animal.title } 
                    />
                </div>
                <div className="
                    rounded-lg  overflow-hidden ring-1 ring-slate-300 shadow-lg
                    absolute w-full h-full bg-slate-700 [backface-visibility:hidden] flex items-center justify-center
                ">
                    Back
                </div>
            </div>


        </div>
    )
}

export default Card;