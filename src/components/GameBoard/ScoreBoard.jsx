import PropTypes from 'prop-types';
import { useUser } from '../../contexts/UserContext';

const ScoreBoard = ({ matches, misses, userName } ) => {

    const { logoutUser } = useUser();

    return (
        <div className="
        grid grid-cols-2
        w-full max-w-80 sm:max-w-4xl mx-auto 
        mb-6 sm:mb-8
        ">
            <div>
                <p className="text-xl font-semibold">Matches: {matches}</p>
                <p className="text-lg">Misses: {misses}</p>
            </div>

            <div className=" text-right">
                <p>Hello { userName } </p>
            
                <a className=' cursor-pointer' onClick={ ()=> logoutUser() }>Logout</a>
            </div>
            
        </div>
    )

}

ScoreBoard.propTypes = {
    matches: PropTypes.number.isRequired,
    misses: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
};

export default ScoreBoard;