import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function ToDoListItem(props) {
    const [isEditMode, setIsEditMode] = useState(false) //контролирует состояние элемента

    const {todo,
        markAsDone,
        markDoAgain,
        remove,
        todoUpdate,
        moveUpButton,
        moveDownButton,
        index} = props //принимает props от родителя

    const isToDoDone = todo.done
    const toDoTitle = todo.title
    const toDoId = todo.id



    const titleStyle = isToDoDone === true ?
        {textDecoration: "line-through", listStyleType: "none"} :
        {listStyleType: "none"}

    const [newToDo, setNewToDo] = useState(toDoTitle)//создан новый стэйт который обновляет данные в каждой задаче - дает

    const inputHandler = (e) => {
        setNewToDo(e.target.value)

    }
    const saveButtonHandler = () => {
        todoUpdate(toDoId,newToDo)
        setIsEditMode(false)
    }

    return (
        <div className="list-group-item">
        <div>
            {isEditMode ? (
                <div>
                    <input onChange={inputHandler} value={newToDo}/>
                <button type="button" class="btn btn-info ml-2 mr-2" onClick={saveButtonHandler}>Save</button>
                </div>
            ) : (
                <div>
                    {isToDoDone ? (
                        <li style={titleStyle}>
                            {toDoTitle}
                            <button type="button" class="btn btn-success ml-2 mr-2" onClick={() => markDoAgain(toDoId)}> Do again </button>
                            <button type="button" class="btn btn-danger ml-2 mr-2" onClick={() => remove(toDoId)}> X </button>
                            <button type="button" class="btn btn-warning ml-2 mr-2" onClick={() => setIsEditMode(true)}> Edit </button>
                        </li>
                    ) : (
                        <li style={titleStyle}>
                            {toDoTitle}
                            <button type="button" class="btn btn-outline-primary ml-2 mr-2" onClick={() => markAsDone(toDoId)}> Mark as Done </button>
                            <button type="button" class="btn btn-danger ml-2 mr-2" onClick={() => remove(toDoId)}> X </button>
                            <button type="button" class="btn btn-warning ml-2 mr-2" onClick={() => setIsEditMode(true)}> Edit </button>

                            <button type="button" class="btn btn-success ml-2 mr-2" onClick={() => moveDownButton(index)}>Move Down</button>
                            <button type="button" class="btn btn-success ml-2 mr-2" onClick={() => moveUpButton(index)}>Move Up</button>
                        </li>)
                    }

                </div>
            ) }


        </div>
        </div>)

}


export default ToDoListItem;
