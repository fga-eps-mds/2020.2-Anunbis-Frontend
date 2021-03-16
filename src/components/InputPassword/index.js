import React from "react";

export default function InputPassword(props) {
    return (
        <div>
            <input type="password" placeholder={props.text}>
            </input>
        </div>

    );
}