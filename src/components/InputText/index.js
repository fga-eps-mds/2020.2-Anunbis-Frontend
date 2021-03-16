import React from "react";

export default function InputText(props) {

    return (
        <div>
            <input type="text" placeholder={props.text}>
            </input>
        </div>
    );
}