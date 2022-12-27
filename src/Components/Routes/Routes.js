import { createBrowserRouter } from "react-router-dom";
import Main from "../Common/Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompleteTsk from "../Pages/CompleteTask/CompleteTsk";
import MyTask from "../Pages/MyTask.js/MyTask";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AddTask></AddTask>
            },
            {
                path:'/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completetask',
                element: <CompleteTsk></CompleteTsk>
            }
        ]
    }
]);


export default router;