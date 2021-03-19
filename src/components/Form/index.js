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
        <div className="footer">
            {children}
        </div>
    )
}

function Form({link, title, children, onSubmit}) {
    return (
        <main className="formulario">
            <div className="logo" />
            <form className="form" onSubmit={onSubmit}>
                <div className="isStudent">
                    <h4>{link}</h4>                
                </div> 
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