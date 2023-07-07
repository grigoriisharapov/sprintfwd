import { FC, ReactNode, createContext, useContext, useState } from "react";
import Todo from "../interfaces/Todo";
import { nanoid } from "nanoid";

const initialTodos = [
  {
    "id": nanoid(),
    "text": "Demo note 1",
    "completed": true
  },
  {
    "id": nanoid(),
    "text": "Demo note 2",
    "completed": true
  }
]

const TodosContext = createContext<{
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
}>({
  todos: [],
  setTodos: () => { }
});

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <TodosContext.Provider
      value={{ todos, setTodos }}
    >
      {children}
    </TodosContext.Provider>
  );

};

export const useTodosContext = () => useContext(TodosContext);
