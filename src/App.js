import React, {useEffect, useState} from 'react';
// import {useDrag} from 'react-dnd';
//import {useDrop} from 'react-dnd';
// import {ItemTypes} from './Constants';
import './App.css';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

// const initialList = [
//   {id: 1, title: "First task: ", done: false},
//   {id: 2, title: "Second task: ", done: false},
//   {id: 3, title: "Third task: ", done: false}]


function App() {
// Make a request for a user with a given ID

  const [list, setList] = useState([])

  const create = async (title, descriptionTitle) => {
    await axios.post('http://localhost:5000/todo', {name: title, description: descriptionTitle})
        .then(function (response) {
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

    await axios.get('http://localhost:5000/todo')
        .then(function (response){
          const listFromServer = response.data
          console.log(listFromServer)
          setList(listFromServer)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
  }

    const remove = async (todoId) => {
        await axios.delete(`http://localhost:5000/todo/${todoId}`)
            .then(function (response){
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        await axios.get('http://localhost:5000/todo')
            .then(function (response){
                const listFromServer = response.data
                console.log(listFromServer)
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    // const todoUpdate = (toDoId, newToDo) =>{                 //сделали новую функцию которая принимает два аргумента
    //   const updatedList = list.map(el => {             //newToDo - содержит значение которое мы введем в input
    //     if(el._id === toDoId) return {...el, name: newToDo} //toDoId - содержит id элемента.
    //     return el                                           // Проходимся map по элементу, Если id совпадает с id нашего элемента который выбрали для изменения,
    //     })                                                 // то и РАЗВОРАЧИВАЕМ ЭТОТ ЭЛЕМЕНТ (он же ОБЪЕКТ!) и передаем в name значение newToDo(То что мы написали в Todo (обновили title/name и добавили обра
    //   setList(updatedList)
    // }

    const todoUpdate = async (toDoId,newToDo,descriptionTitle) => {
        await axios.patch(`http://localhost:5000/todo/${toDoId}`, {name: newToDo, description:descriptionTitle})
            .then(function () {

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        await axios.get('http://localhost:5000/todo')
            .then(function (response){
                const listFromServer = response.data
                console.log(listFromServer)
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }


    // const create = title => {                //Создание новой Todo.
  //   console.log(title)                       //
  //     const newItem = {                      //Создаем переменную в виде ОБЪЕКТА! в которой задаем все парамеры каждой новой Todo
  //       id: Math.random()*10,                //Задаем рандомный Id
  //         title,                             // Title пишем просто как title
  //         done: false,                       //Статус пишем как false - потому что она еще невыполнена (она не true!)
  //  //     }
  //     const updatedList = [...list,newItem]; //Создаем новый массив в котором РАЗВОРАЧИВАЕМ СТАРЫЙ МАССИВ и ДОБАВЛЯЕМ НОВУЮ Todo!
  //   setList(updatedList);                    //Изменяем наш Стейт через добавление в функцию setList нового массива данных с новой Todo!
  // }

  // const markAsDone = (toDoId) => {                       //Пометка Todo как выполненной!
  //   const newList = [...list].map(el => {                //Создаем переменную в которой РАЗВОРАЧИВАЕМ наш массив и проходимся по нему MAP. - проверяем каждый элемент
  //     if(el._id === toDoId) return {...el, done: true}   //массива - если id элемента совпадает с выбранным нами для пометки, то возвращаем - РАЗВОРАЧИВАЕМ ЭТО ЭЛЕМЕНТ и МЕНЯЕМ В НЕМ done (статус) на true (выполненно)
  //       return el                                        //И потом возращаем опять этот элемент.
  //  })
  // setList(newList)
  // }
  //

  const markAsDone = async (toDoId) => {
      await axios.put(`http://localhost:5000/todo/${toDoId}`, {done: true})
          .then(function () {
              // const updatedList = list.map(el => {
              //     if (el._id === toDoId) return {...el, done: true}
              //     return el
              // })
              // setList(updatedList)
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          });

      await axios.get('http://localhost:5000/todo')
          .then(function (response){
              const listFromServer = response.data
              console.log(listFromServer)
              setList(listFromServer)
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          });
  }

  // const markDoAgain = (toDoId) => {
  //   const newList = [...list].map(el => {
  //     if(el._id === toDoId) return {...el, done: false}
  //     return el
  //   })
  //   setList(newList)
  // }

  const markDoAgain = async (toDoId) => {
        await axios.patch(`http://localhost:5000/todo/${toDoId}`, {done: false})
            .then(function () {
                // const updatedList = list.map(el => {
                //     if (el._id === toDoId) return {...el, done: false}
                //     return el
                // })
                // setList(updatedList)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        await axios.get('http://localhost:5000/todo')
            .then(function (response){
                const listFromServer = response.data
                console.log(listFromServer)
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
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
  }
  let lengthList = list.length;

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

  useEffect(() =>{
    axios.get('http://localhost:5000/todo')
        .then(function (response){
          const listFromServer = response.data
          console.log(listFromServer)
          setList(listFromServer)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

  },[])

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
                  lengthList={lengthList}
        />
        </div>
      </div>

  );
}


export default App;
