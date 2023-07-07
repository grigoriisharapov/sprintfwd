import { RouterProvider } from "react-router-dom";
import router from "./router";
import { TodosProvider } from "./providers/TodosProvider";
import './index.css'

const App = () => {
  return (
    <TodosProvider>
      <RouterProvider router={router} />
    </TodosProvider >
  )
}

export default App;
