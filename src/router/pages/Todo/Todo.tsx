import Layout from "../../../components/Layout";
import TodoTable from "../../../components/TodoTable";
import useTodoActions from "../../../hooks/useTodoActions";

const TodoPage = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useTodoActions();

  return (
    <Layout>
      <TodoTable todos={todos} addTodo={addTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </Layout>
  );
}

export default TodoPage;
