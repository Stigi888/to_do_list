import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function TodoCreateForm(props){

    const [inputValue,setInputValue] = useState(222);

    const inputOnChange = e => {setInputValue(e.target.value)
    console.log(e.target)
    };

    const onCreate = () => {
        props.create(inputValue);
        setInputValue(' ')

        }

  return (

    <div className="App">

        <button type="button" class="btn btn-md btn-primary ml-2 mr-2" disabled>Add noted</button>

        <input value={inputValue} onChange={inputOnChange}/>

        <button class="btn btn-primary ml-2 mr-2" onClick={onCreate}> Create </button>

    </div>
  );
}

export default TodoCreateForm;
