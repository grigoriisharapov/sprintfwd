import { createBrowserRouter } from "react-router-dom";
import Members from "./pages/Members";
import Teams from "./pages/Teams";
import Todo from "./pages/Todo";
import Team from "./pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Members />,
  },
  {
    path: "/members",
    element: <Members />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/team/:id",
    element: <Team />,
  },
]);

export default router;
