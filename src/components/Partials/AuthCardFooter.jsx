import React from "react";
import { Link } from "react-router-dom";

const AuthCardFooter = (props) => {
    return (
        <div class="card-footer text-center">
            <div class="small">
                <Link to={ props.to }>{ props.text }</Link>
            </div>
        </div>
    );
}

export default AuthCardFooter;