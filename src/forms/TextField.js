/*
export default function textField({label, inputName, children}) {
    return (
            <>
                <label>{label}</label>
                <input type='text' name={inputName}/>
                <div>{children}</div>
            </>);
}*/
import {Component} from "react";

export default class TextField extends Component {

    render() {
        return(<>
            <label>{this.props.label}</label>
            <input type='text' name={this.props.inputName}/>
            <div>{this.props.children}</div>

        </>);
    }

}
