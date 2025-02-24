/*export default function HelloWorld({lastName}){
   const age = 17;
   return (<h1>Hello {lastName}  {age >= 18 ? 'Adult': 'minor ' }</h1>);
}*/


import {Component} from "react";

export default class HelloWorld extends Component {
    age = 18
    render() {
        return <h1>Hello {this.props.lastName} {this.age >= 18 ? 'Adult': 'minor ' }!</h1>;
    }
}
