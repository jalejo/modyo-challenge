import LogoFull from "../../assets/LogoFull";
import { useUser } from "../../contexts/UserContext";
import { useState } from "react";

const Login = () => {

    const { user, loginUser } = useUser();
    const [userName, setUserName] = useState('');

    const [showError, setShowError] = useState(false);

    const handleLogin = () => {
        userName ? (
            setShowError(false),
            loginUser( userName ),
            setUserName('')
        ) : setShowError(true)
    }



    return (
        <div className={`
            w-full flex items-center 
            ${ user?.name ? 'animate-hideLogin scale-0 h-0' : 'animate-showLogin h-dvh scale-100' }
        `}>
            <div className="mx-auto w-full max-w-80 sm:max-w-md 
                 flex items-center flex-col
                 px-20 pt-8 pb-10 text-center
                bg-white rounded-lg overflow-hidden shadow-xl">

                <div className="w-64 mb-8"><LogoFull /></div>
                <h5>Welcome</h5>
                <p className="text-sm mb-6">🧠 Get ready to challenge your mind and enjoy the fun! Good luck!</p>
                <div className="w-full mb-6 md:mb-0">
                    <input
                        id="grid-first-name"
                        className={`
                            ${ showError ? 'border-red-500 ' : 'border-gray-400' }
                            appearance-none block w-full bg-white text-gray-700 border 
                            rounded-lg py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white
                            `}
                        type="text"
                        placeholder="Username"
                        value={ userName }
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    {showError && (
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    )}

                    <button
                        type="button"
                        className="regular-bottom regular-bottom__gradient"
                        onClick={() => handleLogin()}
                        onTouchStart={() => handleLogin()}
                    >
                        Let&apos;s Play
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;