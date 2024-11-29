import React, {
    createContext,
    useState,
    useContext,
    useEffect
} from "react";
import Config from "../Config/Config.json"

const UserContext = createContext();

const UserProvider = ({ children }) => {




    return (
        <UserContext.Provider
            value={{


            }}
        >
            {children}

        </UserContext.Provider>
    )
}


function UserProfile() {
    const context = useContext(UserContext)



    return context
}


export { UserContext, UserProvider, UserProfile }


