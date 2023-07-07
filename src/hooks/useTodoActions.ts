import { nanoid } from "nanoid"
import { TodoAddI, TodoRemoveI, TodoUpdateI } from "../interfaces/Todo"
import { useTodosContext } from "../providers/TodosProvider"

const useTodoActions = () => {
  const { setTodos, todos } = useTodosContext()

  const addTodo: TodoAddI = (text) => {
    setTodos([{
      id: nanoid(),
      text,
      completed: false
    }, ...todos])
  }

  const removeTodo: TodoRemoveI = (id) => {
    setTodos(todos.filter((_todo) => id !== _todo.id))
  }

  const updateTodo: TodoUpdateI = (id, changes) => {
    setTodos(todos.map((_todo) => {
      if (_todo.id === id) {
        return {
          ..._todo,
          ...changes
        }
      }
      return _todo
    }))
  }

  return { addTodo, removeTodo, updateTodo, todos }
}

export default useTodoActions
