import React from "react";

const AuthCardHeader = () => {
    const logo = {
        width: "25rem",
        padding: "0rem 5rem",
    };
    return (
        <div class="card-header justify-content-center bg-white">
            <img src="assets/images/logo.png" style={logo} alt="Logo Glint" />
        </div>
    );
}

export default AuthCardHeader;