import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLogin from "./features/dashboardLogin/DashboardLogin";
import AddEmployee from "./features/addEmployee/AddEmployee";
import LIstOfEmployees from "./features/listOfEmployees/LIstOfEmployees";
import EditEmployee from "./features/EditEmployee/EditEmployee";
import AppLayout from "./component/AppLayout";
import SeachLocation from "./features/weather/SeachLocation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLogin />,
  },
  {
    path: "/add-employee",
    element: <AddEmployee />,
  },
  {
    path: "/edit-employee",
    element: <EditEmployee />,
  },
  {
    path: "/edit-employee/:_id",
    element: <EditEmployee />,
  },
  {
    path: "/list-of-employees",
    element: <LIstOfEmployees />,
  },
  {
    path: "/weather",
    element: <SeachLocation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
