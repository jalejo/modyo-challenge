import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
    return useContext( UserContext );
}

export const UserProvider = ( { children } ) => {

    const [ user, setUser ] = useState( null );

    const loginUser = ( name ) => {
        setUser( { name } )
    }

    const logoutUser = () => {
        setUser( null );
    }

    return(
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            { children }
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};