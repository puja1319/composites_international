import React, { useEffect, useState, } from "react";
import { UserProfile } from "../Conetext/UserContext";
import c_i_logo from "../Assets/Images/composite_logo.png"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const History = () => {

    const { Get_All_Time,dateTime } = UserProfile();

    useEffect(() => {
        console.log("datetime:", dateTime);
    }, []);

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
                                <th scope="col">Select date</th>
                                <th scope="col">Select time from</th>
                                <th scope="col">Select time to</th>
                                <th scope="col">North</th>
                                <th scope="col">Center</th>
                                <th scope="col">South</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-10-14</td>
                                <td scope="row">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select time
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">08:00:00</a></li>
                                            <li><a className="dropdown-item" href="#">09:00:00</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select time
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">09:00:00</a></li>
                                            <li><a className="dropdown-item" href="#">10:00:00</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td>200.00</td>
                                <td>250.00</td>
                                <td>120.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default History;