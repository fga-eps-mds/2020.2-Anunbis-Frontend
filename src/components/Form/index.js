import React from "react";
import './index.css';


const Field = ({errorMsg, children}) => {
    return (
        <div className="field">
            {children}
            <div className="field error">{errorMsg}</div>
        </div>
    )
}

const Footer = ({children}) => {
    return (
        <div className="button">
            {children}
        </div>
    )
}

function Form({title, children, onSubmit}) {
    return (
        <main>
            <div className="logo" />
            <form className="form" onSubmit={onSubmit}>
                <h4>
                    {title}
                </h4>
                <div className="fields">
                    {children}
                </div>
            </form>
        </main>
    );
}


Form.Field = Field;
Form.Footer = Footer;
export default Form;