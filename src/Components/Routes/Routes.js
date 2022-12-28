import { createBrowserRouter } from "react-router-dom";
import Main from "../Common/Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompleteTsk from "../Pages/CompleteTask/CompleteTsk";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import MyTask from "../Pages/MyTask.js/MyTask";
import Register from "../Pages/Register/Register";


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
                path: '/completetask',
                element: <CompleteTsk></CompleteTsk>
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
            }
        ]
    }
]);


export default router;