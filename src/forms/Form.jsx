import {useState} from "react";

export default function Form(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

  const handleInputNameChange = () =>{
       const name = document.querySelector('#name').value;
         setName(name);
    }
    const handleInputAgeChange = () =>{
       const age = document.querySelector('#age').value;
         setAge(age);
    }
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log({
          name ,
          age
      })
  }
    return  <div>
                <form>
                    <input type="text" id='name' onChange={handleInputNameChange} placeholder="Name"/>
                    <input type="text" id='age' onChange={handleInputAgeChange} placeholder="Age" />
                    <input type="button" value ="submit" onClick={handleSubmit} />
                </form>
            </div>
}