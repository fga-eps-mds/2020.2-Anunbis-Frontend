import React from "react";

export default function Input(props) {

    return (
        <div>
            <input type={props.type} placeholder={props.text}>
            </input>
        </div>
    );
}