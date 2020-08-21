import React from 'react';
import './App.css';
import ToDoListItem from "./ToDoListItem";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList(props) {

    const {markAsDone,
        markDoAgain,
        list,
        remove,
        todoUpdate,
        moveUpButton,
        moveDownButton,
        lengthList} = props

        return (
    <div>
        <h3 className="alert alert-primary" role="alert">To do List</h3>
       {list.map((el,index) => <ToDoListItem
           todo={el}
           key={el._id}
           markAsDone={markAsDone}
           markDoAgain={markDoAgain}
           remove={remove}
           todoUpdate={todoUpdate}
           moveUpButton={moveUpButton}
           moveDownButton={moveDownButton}
           index={index}
           lengthList={lengthList}
       />)}

    </div>
    )
}

export default TodoList;
