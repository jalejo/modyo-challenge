import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Modal = ({ open, handleClose, children }) => {

    const [showOverflow, setShowOverflow ] = useState(open)

    useEffect( () => {
        if( open ){
            setShowOverflow(true);
        }
        else{
            const timeout = setTimeout(() => {
                setShowOverflow(false);
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [open] );

    return (

        <div className={
            `${ showOverflow ? 'flex' : 'hidden' } 
            ${open ? 'modal-open opacity-100' : 'opacity-0' }
            transition-opacity ease-in-out duration-500
            justify-center items-center
            fixed inset-0 bg-gray-700 bg-opacity-75`
        }
        //onClick={handleClose}
        >
            <div className={ 
                `${open ? 'scale-100' : 'scale-0' }
                transform transition-all ease-in-out duration-300
                inline-block px-2 py-6 text-center
                w-full max-w-80 sm:max-w-md
                bg-white rounded-lg overflow-hidden shadow-xl 
                `
            }
            //onClick={(e) => e.stopPropagation()}
            >
                {children}

            </div>
        </div>

    )

}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;