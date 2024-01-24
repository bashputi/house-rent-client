import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Register from "../Pages/signIn/Register";
import Login from "../Pages/signIn/Login";
// import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import Addhouse from "../components/Addhouse";
import Allhouses from "../components/Allhouses";
import Update from "../components/Update";
import Details from "../components/Details";
import Book from "../components/Book";
import Allbooks from "../components/Allbooks";



const myRouter = createBrowserRouter([
{
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <NotFound></NotFound>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5002/rents')
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5002/rents/${params.id}`)
        },
        {
            path: 'book/:id',
            element: <Book></Book>,
             loader: ({params}) => fetch(`http://localhost:5002/rents/${params.id}`),
          },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
    ]
},
{
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
     {
        path: 'addhouse',
        element: <Addhouse></Addhouse>
     },
     {
        path: 'allhouses',
        element: <Allhouses></Allhouses>
     },
     {
        path: 'allbooks',
        element: <Allbooks></Allbooks>
     },
     {
        path: 'allhouses/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5002/userrents/${params.id}`),
     }
    ]
}
])
 

export default myRouter;