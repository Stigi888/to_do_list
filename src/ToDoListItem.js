import React, {useState} from 'react'; //импортируем(подключаем) hook useState из реакта
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; //подключаем bootstrap


function ToDoListItem(props) {
    const [isEditMode, setIsEditMode] = useState(false)  //контролирует состояние элемента - Выполне(true) или Невыполнен(false)

    const {todo,                                //Принимаем props от родителя
        markAsDone,
        markDoAgain,
        remove,
        todoUpdate,
        moveUpButton,
        moveDownButton,
        index,
        lengthList} = props

    const isToDoDone = todo.done            // ?????????
    const toDoTitle = todo.name
    const toDoId = todo._id




    const titleStyle = isToDoDone === true ?                     //Контролирует стиль - Зачеркивает и расчеркивает Todo
        {textDecoration: "line-through", listStyleType: "none"} :
        {listStyleType: "none"}

    const [newToDo, setNewToDo] = useState(toDoTitle)//создан новый стэйт который обновляет данные в каждой задаче - дает

    const inputHandler = (e) => {       //Функция которая прописывает title (описание ) созданной Todo
        setNewToDo(e.target.value)

    }
    const saveButtonHandler = () => {     //функция которая сохраняет TITLE созданной  todo и сохраняет ее задавая editMode на FALSE(невыполненна)
        todoUpdate(toDoId,newToDo)        //Прикреплена к кнопке SAVE
        setIsEditMode(false)
    }

    return (
        <div className="list-group-item">
        <div>
            {isEditMode ? (                                                                                      //Состояние todo описываем с помощью тернарного оператора.
                <div>                                                                                            //Если EditMode имеет статус FALSE то делается вот это
                    <input onChange={inputHandler} value={newToDo}/>                                                    //Пишем новое Todo
                    <button type="button" className="btn btn-info ml-2 mr-2" onClick={saveButtonHandler}>Save</button>      //Сохраняем написанное новое Todo
                </div>
            ) : (
                <div>
                    {isToDoDone ? (                                         //Показываем статус выполнения/невыполнения Todo
                        <li style={titleStyle}>                             //Применяем стиль (зачеркиваем) в зависимости от статуса Todo - если
                            {toDoTitle} //показывает title todo который передается сюда из

                            <button type="button" className="btn btn-success ml-2 mr-2" onClick={() => markDoAgain(toDoId)}> Do again </button>
                            <button type="button" className="btn btn-danger ml-2 mr-2" onClick={() => remove(toDoId)}> X </button>
                            <button type="button" className="btn btn-warning ml-2 mr-2" onClick={() => setIsEditMode(true)}> Edit </button>
                        </li>
                    ) : (
                        <li style={titleStyle}>
                            {toDoTitle}

                            <button type="button" className="btn btn-outline-primary ml-2 mr-2" onClick={() => markAsDone(toDoId)}> Mark as Done </button>
                            <button type="button" className="btn btn-danger ml-2 mr-2" onClick={() => remove(toDoId)}> X </button>
                            <button type="button" className="btn btn-warning ml-2 mr-2" onClick={() => setIsEditMode(true)}> Edit </button>

                            {index !== lengthList-1 && <button type="button" className="btn btn-success ml-2 mr-2" onClick={() => moveDownButton(index)}>Move Down</button>}
                            {index !== 0 && <button type="button" className="btn btn-success ml-2 mr-2" onClick={() => moveUpButton(index)}>Move Up</button>}
                        </li>)
                    }

                </div>
            ) }


        </div>
        </div>)

}


export default ToDoListItem;
