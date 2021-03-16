import React from "react";

export default function Button(props) {
    return (
        <div className="Button">
            <button>
                {props.text}
            </button>
        </div>
    );
}