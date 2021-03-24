import React from "react";
import "./index.css"

export default function Input(props) {

    return (
        <div className="Input">
            <input type={props.type} 
            placeholder={props.text} 
            value={props.value} 
            name={props.name} 
            ref={props.register} 
            autoComplete="off" 
            onKeyPress={props.onkeydown}
            step={props.step}>
            </input>
        </div>
    );
}
