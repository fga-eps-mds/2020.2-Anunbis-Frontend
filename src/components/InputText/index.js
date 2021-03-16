import { Component } from "react";

export default class InputText extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder={this.props.text}>
                </input>
            </div>
        );
    }

}