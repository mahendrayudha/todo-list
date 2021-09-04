import React from "react";

const Input = (props) => {
    return (
        <input
            class="form-control py-4"
            id={ props.id }
            type={ props.type }
            placeholder={ props.placeholder }
        />
    );
}

export default Input;