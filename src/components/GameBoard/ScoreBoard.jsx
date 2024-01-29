import PropTypes from 'prop-types';
const ScoreBoard = ({ matches, misses, userName } ) => {
    return (
        <div className="
        grid grid-cols-2
            w-full max-w-80 sm:max-w-4xl mx-auto 
        ">
            <div>
                <p className="text-xl">Matches: {matches}</p>
                <p className="text-lg">Misses: {misses}</p>
            </div>

            <div className=" text-right">
                <p>Hello { userName } </p>
            </div>
            


        </div>
    )

}

ScoreBoard.propTypes = {
    matches: PropTypes.number.isRequired,
    misses: PropTypes.number.isRequired,
};

export default ScoreBoard;