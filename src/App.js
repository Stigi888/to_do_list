import React, {useState} from 'react';
// import {useDrag} from 'react-dnd';
//import {useDrop} from 'react-dnd';
// import {ItemTypes} from './Constants';
import './App.css';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";


const initialList = [
  {id: 1, title: "First task: ", done: false},
  {id: 2, title: "Second task: ", done: false},
  {id: 3, title: "Third task: ", done: false}]

function App() {

  const [list, setList] = useState(initialList)

  const create = title => {
    console.log(title)
      const newItem = {
        id: Math.random()*10,
          title,
          done: false,

      }
      const updatedList = [...list,newItem];
    setList(updatedList);
  }

  const markAsDone = (toDoId) => {
    const newList = [...list].map(el => {
      if(el.id === toDoId) return {...el, done: true}
        return el
   })
  setList(newList)
  }
  const markDoAgain = (toDoId) => {
    const newList = [...list].map(el => {
      if(el.id === toDoId) return {...el, done: false}
      return el
    })
    setList(newList)
  }
  const remove = (toDoId) => {
    const newItem = [...list].filter(el => el.id !== toDoId)
    setList(newItem)
  }
  const todoUpdate = (toDoId, newToDo) =>{          //сделали новую функцию которая принимает два аргумента
    const updatedList = [...list].map(el => {     //newToDo - содержит значение которое мы введем в input
      if(el.id === toDoId) return {...el, title: newToDo}//toDoId - содержит id элемента.
      return el                               // Проходимся map по элементу и создаем новый элемент с данными старого
      })
    setList(updatedList)
  }

  const moveUpButton = (index) => {
    if(index !== 0) {
      let newList = [...list]
      newList.splice(index - 1, 0, newList.splice(index, 1)[0]);
      setList(newList)
    }
  }

  const moveDownButton = (index) => {
    let newList = [...list]
    newList.splice(index + 1, 0, newList.splice(index, 1)[0]);
    setList(newList)
    console.log(newList)
  }

  // function moveArrayItemToNewIndex(arr, old_index, new_index) {
  //   if (new_index >= arr.length) {
  //     var k = new_index - arr.length + 1;
  //     while (k--) {
  //       arr.push(undefined);
  //     }
  //   }
  //   arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  //   return arr;
  // };


  return (
      <div className="App">
        <div className="list-group-item">
        <TodoCreateForm create={create}/>

        <TodoList markAsDone={markAsDone}
                  markDoAgain={markDoAgain}
                  list={list}
                  remove={remove}
                  todoUpdate={todoUpdate}
                  moveUpButton={moveUpButton}
                  moveDownButton={moveDownButton}
        />
        </div>
      </div>

  );
}


export default App;
