import React, { useEffect, useState, } from "react";
import { Link } from 'react-router-dom';
import c_i_logo from "../Assets/Images/composite_logo.png"
import north from "../Assets/Images/north.png"
import center from "../Assets/Images/central.png"
import south from "../Assets/Images/south.png"
import { UserProfile } from "../Conetext/UserContext";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const WeightMonitor = () => {

    const { allBanner,gageFactor } = UserProfile();

    useEffect(() => {
        
    }, [allBanner]);

    return (
        <div style={{ backgroundColor: '#F1F2F5' }}>
            <Header title="Go to History" link="/history"/>
            <div className="d-flex justify-content-between margin_main_x mt-5">
                <div className="d-flex justify-content-between align-items-end w_38">
                    <div className="prod_date_head mb-3">Production Date/ Time :</div>
                    <div className="time_div_font time_div px-4 py-3 bg-white">
                        {allBanner?.Gamma_Gage_Time}
                    </div>
                    {/* <div className="time_div_font time_div px-4 py-3 bg-white">06:35:54</div> */}
                </div>
                <div className="d-flex justify-content-between right_tracking_div p-3 w_42">
                    <div className="me-2 w-100">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="right_tracking_text w-50">Run Line :</div>
                            <div className="time_div time_div_h_w bg-white d-flex justify-content-center align-items-center right_tracking_value">SMC 1</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="right_tracking_text w-50">MixMO :</div>
                            <div className="time_div time_div_h_w bg-white d-flex justify-content-center align-items-center right_tracking_value">M369480</div>
                        </div>
                    </div>
                    <div className="ms-2 w-100">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="right_tracking_text w-50">PackMO :</div>
                            <div className="time_div time_div_h_w bg-white d-flex justify-content-center align-items-center right_tracking_value">M369470</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="right_tracking_text w-50">Item Number :</div>
                            <div className="time_div time_div_h_w bg-white d-flex justify-content-center align-items-center right_tracking_value">P0009509-F1</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="margin_main_x mt-4 gauge_factor_div p-5 mb-5">
                <div className="d-flex justify-content-center align-items-center mb-5">
                    <div className="gage_txt me-3">Gage Factor :</div>
                    <div className="time_div px-4 py-3 bg-white d-flex justify-content-center align-items-center gage_txt_value">
                        {/* {allBanner?.Gage_Factor_Value} */}
                        {gageFactor}
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="bg-white gauge_value_box d-flex justify-content-center align-items-center">
                        <div>
                            <div className="area_wise_value mb-5">
                                {parseFloat(allBanner?.north_val).toFixed(2)}
                            </div>
                            <div className="d-flex justify-content-center">
                                <img src={north} className="me-2 image_size" />
                                <div className="area">North</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white gauge_value_box d-flex justify-content-center align-items-center">
                        <div>
                            <div className="area_wise_value mb-5">
                            {parseFloat(allBanner?.center_val).toFixed(2)}
                            </div>
                            <div className="d-flex justify-content-center">
                                <img src={center} className="me-2 image_size" />
                                <div className="area">Center</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white gauge_value_box d-flex justify-content-center align-items-center">
                        <div>
                            <div className="area_wise_value mb-5">
                            {parseFloat(allBanner?.south_val).toFixed(2)}
                            </div>
                            <div className="d-flex justify-content-center">
                                <img src={south} className="me-2 image_size" />
                                <div className="area">South</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center gage_factor_footer mt-5">Gamma Gage Material Weight (gm/sqft)</div>
            </div>
            <Footer/>
        </div>
    )
}

export default WeightMonitor;