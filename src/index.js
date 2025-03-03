import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './counter/Counter';
import Fruit from "./fruits/fruit";
import HelloWorld from "./helloWorld/HelloWorld";
import TextField from "./forms/TextField";
import Event from "./Events/Event";
import Form from "./forms/Form";
//import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsArray = ['Strawberry' , 'Lemon', 'Mango', 'Apple', 'Water Melon' ]

        /*<HelloWorld lastName='Assouma'/>
        <TextField inputName='firstName' label='First Name'/>
        <TextField inputName='lastName' label='Last Name'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TextField>*/
       /* {
            <Fruit fruits={fruitsArray}/>
        }*/

root.render(
    <Form />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
