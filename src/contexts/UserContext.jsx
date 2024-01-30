import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
    return useContext( UserContext );
}

export const UserProvider = ( { children } ) => {

    const [ user, setUser ] = useState( null );

    const loginUser = ( name ) => {
        setUser( { name } );
        localStorage.setItem('user', JSON.stringify({ name }));
    }

    const logoutUser = () => {
        setUser( null );
        localStorage.removeItem('user');
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return(
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            { children }
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};