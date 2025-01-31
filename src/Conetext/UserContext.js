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
    const [gageFactor, setGageFactor] = useState(0)
    const [dateTime, setDateTime] = useState([])

    useEffect(() => {
        Get_All_Time();
    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
            setLimit(limit + 1);
            // temp=temp + 1

            Get_All_Banner();

        }, 5000);

        return () => clearInterval(interval);
    }, [limit]);



    const Get_All_Banner = async () => {
        
        try {
            const response = await axios.get("http://localhost/api/getdata.php?limit=" + limit,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

            console.log("Get All Banner response", response);
            setAllBanner(response.data[0]);
            if (parseInt(response.data[0].total_count) === limit) {
                setLimit(0)
            }
            if (response.data[0].Gage_Factor_Value === "0.00") {


            }
            else {
                setGageFactor(parseFloat(response.data[0].Gage_Factor_Value))
            }
            return response;
        }
        catch (error) {
            setGageFactor(0)
            console.log("Get All Banner CONTEXT ERROR: ", error);
        }
    }

    const Get_All_Time = async () => {
        try {
            const response = await axios.get("http://localhost/api/gettime.php?limit=10",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

            console.log("Get All Time response", response);
            setDateTime(response.data)
            return response;
        }
        catch (error) {
            console.log("Get All Time CONTEXT ERROR: ", error);
        }
    }

    const Get_All_History = async () => {
        try {
            const response = await axios.get("http://localhost/api/historyData.php",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

           
            return response.data;
        }
        catch (error) {
            console.log("Get All Time CONTEXT ERROR: ", error);
        }
    }
    return (
        <UserContext.Provider
            value={{

                Get_All_Banner,
                allBanner,
                gageFactor,
                Get_All_Time,
                dateTime,
                Get_All_History
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


