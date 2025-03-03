/*export default function Event (){


    return <div>
                <button onClick={handleClick}>
                    Click Me!
                </button>
            </div>
}*/
import {Component} from "react";

export default class Event extends Component
{
    handleClick = () => { console.log(this); alert("BOOM !!!!");}

    render(){
        return (<div>
            <button onClick={this.handleClick}>
                Click Me!
            </button>
        </div>)
    }

}