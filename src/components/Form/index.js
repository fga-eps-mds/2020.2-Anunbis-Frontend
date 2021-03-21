import React from "react";
import './index.css';
import { Link } from 'react-router-dom';


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

function Form({endereco,link, title, children, onSubmit}) {
    return (
        <main className="formulario">
            <div className="logo" />
            <form className="form" onSubmit={onSubmit}>
                <div className="isStudent">
                    <Link to={endereco}><h4>{link}</h4></Link>                
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