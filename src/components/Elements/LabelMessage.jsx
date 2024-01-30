import PropTypes from 'prop-types';
import { memo } from 'react';

const LabelMessage = memo(({ messagesList, labelMessage }) => {

    if (!labelMessage) {
        return null; 
    }

    const resultMessage = messagesList[labelMessage][Math.floor(Math.random() * messagesList[labelMessage].length)];

    return (
        
        <div className={`
            ${ labelMessage ? 'animate-showToast' : '' }
            absolute z-10 bottom-0 right-0 opacity-0 
            min-w-40 py-2 pr-6 pl-4 rounded-lg bg-black bg-opacity-80 
            flex items-center gap-x-3`}
        >
            <div><p className='text-xl' >{ resultMessage.emoji}</p></div>
            <div>
                <p className={`${labelMessage === "match" ? "text-green-500" : "text-red-500" } text-xs font-bold  uppercase`}>   
                    { labelMessage } 
                </p>
                <p className='text-white'>{ resultMessage.message } </p>
            </div>
            

        </div>
    );

});

LabelMessage.propTypes = {
    labelMessage: PropTypes.string,
    messagesList: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                emoji: PropTypes.string,
                message: PropTypes.string,
            })
        )
    ),
};
LabelMessage.displayName = 'LabelMessage';

export default LabelMessage;