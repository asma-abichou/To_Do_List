export default function Fruit ({fruits}){
    const displayFruits = () => { return  fruits.map ((fruit) => <li>{fruit}</li>) }

        return <>
            <h1 className={'h1'}>Fruits</h1>
             <ul>
                 {displayFruits()}
             </ul>
            </>
}

/*import {Component} from "react";

export default class Fruit extends Component{

    render(){
       const displayFruits = () => this.props.fruits.map ((fruit)=> <li>{fruit}</li>)
       this. fruit.push();
        return <>
            <h1>Fruits</h1>
            <ul>
                {displayFruits()}
            </ul>
        </>
    }
}*/
