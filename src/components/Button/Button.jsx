import React from "react";
import { Link } from "react-router-dom";

const BtnPrimary = (props) => {
    return (
    <Link to={ props.to }>
        <a class={ props.btn_class } >
            { props.btn_name }
        </a>
    </Link>
    );
}

export default BtnPrimary;