import { Component } from "react"

export default class Button extends Component{
    render(){
        return(
            <div className="Button">
                <button>
                    {this.props.text}
                </button>
            </div>
        );
    }
}