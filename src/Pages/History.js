import React, { useEffect, useState, } from "react";
import { UserProfile } from "../Conetext/UserContext";
import c_i_logo from "../Assets/Images/composite_logo.png"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const History = () => {

    const { Get_All_Time,dateTime,Get_All_History } = UserProfile();
    const [allHistory,setAllHistory]=useState([])
    useEffect(() => {
        getHistoryOnPage()
    }, []);

    const getHistoryOnPage=async()=>{
        const resp=await Get_All_History()
        setAllHistory(resp)
        console.log("LIST HISTORY===>",resp)
    }

    return (
        <>
            <div style={{ backgroundColor: '#F1F2F5' }}>
                <Header />
                <div className="margin_main_x mt-5">
                    <table className="table table-hover"
                    // style={{
                    //     borderRadius:'40px'
                    // }}
                    >
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Gage Factor</th>
                                <th scope="col">North</th>
                                <th scope="col">Center</th>
                                <th scope="col">South</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {allHistory.map((data, index) => (
                            <tr key={index}>
                                <td>{data.Gamma_Gage_Time}</td>
                                <td scope="row">
                                    {data.Gage_Factor_Value}
                                </td>
                                <td>
                                    {data.north_val}
                                </td>
                                <td>
                                    {data.center_val}
                                </td>
                                <td>
                                    {data.south_val}
                                </td>
                                
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default History;