import { FC, useState } from "react";
import Todo, { TodoAddI, TodoRemoveI, TodoUpdateI } from "../../interfaces/Todo";
import UIButton from "../UIButton";
import UIInput from "../UIInput";
import style from './TodoTable.module.css';
import UncheckedIcon from "./UncheckedIcon";
import CheckedIcon from "./CheckedIcon";

const TodoTable: TodoTableI = ({ todos, addTodo, removeTodo, updateTodo }) => {
  const [value, setValue] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  const addTodoAndReset = (text: string) => {
    if (!value) {
      return
    }
    addTodo(text)
    setValue('')
  }

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      addTodoAndReset(event.currentTarget.value)
    }
  }

  const filteredTodos = filterQuery.length ? todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().indexOf(filterQuery.toLocaleLowerCase()) >= 0
  }) : todos

  return (
    <div>
      <div className={style.buttons}>
        <div className={style.addtodo}>
          <UIInput placeholder="What need to be done?" onKeyDown={onKeyDown} className={style.query} value={value} onChange={(e) => setValue(e.target.value)} />
          <UIButton disabled={!value} onClick={() => addTodoAndReset(value)}>Add note</UIButton>
        </div>
        <UIInput
          placeholder="Filter todos"
          onKeyDown={onKeyDown}
          className={style.filter}
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </div>
      <div className={style.list}>
        {filteredTodos.length ? filteredTodos.map((todo) => (
          <div key={todo.id} className={style.todo}>

            {!todo.completed ? (
              <button className={style.checktodo} onClick={() => {
                updateTodo(todo.id, {
                  text: todo.text,
                  completed: true,
                })
              }}><UncheckedIcon /></button>
            ) : (
              <button className={style.checktodo} onClick={() => {
                updateTodo(todo.id, {
                  text: todo.text,
                  completed: false,
                })
              }}><CheckedIcon /></button>
            )}
            <UIInput disabled={!todo.completed ? false : true} className={!todo.completed ? style.updateinput : style.updateinputdisbled} value={todo.text} onChange={(e) => {
              updateTodo(todo.id, {
                text: e.target.value,
                completed: todo.completed,
              })
            }} />

            <UIButton className={style.delete} onClick={() => removeTodo(todo.id)}>
              Remove
            </UIButton>
          </div>
        )) : <div className={style.empty}>No todos found</div>}
      </div>
    </div>
  );
}

type TodoTableI = FC<{ todos: Todo[], addTodo: TodoAddI, removeTodo: TodoRemoveI, updateTodo: TodoUpdateI }>

export default TodoTable;
