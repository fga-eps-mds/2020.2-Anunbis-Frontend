import { Component } from "react";

export default class InputPassword extends Component{
    render(){
        return(
            <div>
                <input type="password" placeholder={this.props.text}>
                </input>
            </div>

        );
    }

}