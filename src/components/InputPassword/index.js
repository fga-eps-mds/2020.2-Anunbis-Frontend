import { Component } from "react";

export default class InputPassword extends Component{
    render(){
        return(
            <div>
                <input type="password" defaultValue={this.props.text}>
                </input>
            </div>

        );
    }

}