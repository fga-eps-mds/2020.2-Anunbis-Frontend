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

const Header = ({title, children}) => {
    return(
        <div className= "header">
            <div className="links">{children}</div>
            <h4>{title}</h4>
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

function Form({children, onSubmit}) {
    return (
        <main className="formulario">
            <div className="logo" />
            <form className="form" onSubmit={onSubmit}> 
                <div className="fields">
                    {children}
                </div>
            </form>
        </main>
    );
}


Form.Field = Field;
Form.Footer = Footer;
Form.Header = Header;
export default Form;