import { createBrowserRouter } from "react-router-dom";
import Main from "../Common/Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompleteTsk from "../Pages/CompleteTask/CompleteTsk";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import MyTask from "../Pages/MyTask.js/MyTask";


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
            }
        ]
    }
]);


export default router;