import React, {
    createContext,
    useState,
    useContext,
    useEffect
} from "react";
import Config from "../Config/Config.json"
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [allBanner, setAllBanner] = useState()
    const [limit, setLimit] = useState(0)

    useEffect(() => {
        
        const interval = setInterval(() => {
            setLimit(limit + 1);
            // temp=temp + 1

            Get_All_Banner();
            
        }, 5000);
        
        return () => clearInterval(interval);
    }, [limit]);

    const Get_All_Banner = async () => {
        console.log("after 1 second", limit)
        try {
            const response = await axios.get("http://localhost/api/getdata.php?limit="+limit,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

            console.log("Get All Banner response", response);
            setAllBanner(response.data[0]);
            return response;
        }
        catch (error) {
            console.log("Get All Banner CONTEXT ERROR: ", error);
        }
    }

    return (
        <UserContext.Provider
            value={{

                Get_All_Banner,
                allBanner
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


