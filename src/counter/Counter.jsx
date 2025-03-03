/*
import {Component} from "react";

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    handleClick = () =>  {
        console.log(this)
        this.setState(
            prevState => {
            return{ counter : prevState.counter + 1 } },
        )
    }

    render(){
        return <>
            <button onClick={this.handleClick}>Click Here Increment !!!</button>
            <button onClick={this.handleReset}>Reset!!!</button>
            <div> Il y'a {this.state.counter }  Seconds </div>
        </>

    }

}*/

import {useState} from "react";

export default function Counter({initialValue, step}){
 //Hooks
    //useState()
    const [count, setCount] = useState(initialValue);

    return (<div>
                <button onClick={()=> {
                    setCount(
                        prevState => {
                            return prevState + step ;}
                    )
                }}>Click Here Increment !!!</button>
                <button onClick={()=> {
                        setCount(0);
                }}>Reset!!!</button>
                <span>
                        Il y'a {count}  Seconds
                </span>
            </div>)
}
