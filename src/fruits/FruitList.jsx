import {useState} from "react";

export default function FruitList ({fruits}){
    const [fruit, setFruit] = useState('');
    const [fruitsList, setFruitsList]= useState([]);
    const handleFruit = () => {
        const fruitValue = document.querySelector('#fruit').value;
        setFruit(fruitValue);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFruitsList([...fruitsList, fruit])

    }
    const displayFruits = () => { return fruitsList.map ((fruit, fruitKey) => <li key={fruitKey}>{fruit}</li>)}

        return <>
            <span>
                <form>
                    <input type="text" id="fruit" onChange={handleFruit} placeholder="Fruit Name" />
                    <input type="submit" value = "Add Fruit" onClick={handleSubmit}/>
                </form>
            </span>
                    <h1 className={'h1'}>Fruits</h1>
                     <ul>
                         {displayFruits()}
                     </ul>
            </>
}

/*import {Component} from "react";

export default class FruitList extends Component{

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
