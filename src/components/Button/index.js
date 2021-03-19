import React from "react";
import "./index.css";

export default function Button(props) {
    return (
        <div className="Button">
            <button onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
}