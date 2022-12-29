import { createBrowserRouter } from "react-router-dom";
import Main from "../Common/Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompleteTsk from "../Pages/CompleteTask/CompleteTsk";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import MyTask from "../Pages/MyTask.js/MyTask";
import Update from "../Pages/MyTask.js/Update";
import Register from "../Pages/Register/Register";
import ViewDetailsPage from "../Pages/ViewDetailsPage/ViewDetailsPage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path:'/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completetask/:id',
                element: <CompleteTsk></CompleteTsk>,
                loader: ({params}) => fetch(`http://localhost:5000/allTask/${params.id}`)
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/allTask/${params.id}`)
            },
            {
                path:'/viewDetails/:id',
                element: <PrivateRoutes><ViewDetailsPage></ViewDetailsPage></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/allTask/${params.id}`)
            }
        ]
    }
]);


export default router;