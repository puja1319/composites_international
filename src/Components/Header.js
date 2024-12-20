import React, { useEffect, useState, } from "react";
import { Link } from 'react-router-dom';
import c_i_logo from "../Assets/Images/composite_logo.png"

const Header = (props) => {
    return (
        <>
            <div className="d-flex margin_main_x pt-4">
                <img src={c_i_logo} className="" />
                <div className="main_heading w-75">Gamma Gage Material Weight Monitor</div>
                <Link to={props.link} className="ml_8">{props.title}</Link>
            </div>
        </>
    )
}

export default Header;