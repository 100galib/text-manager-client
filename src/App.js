import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/Routes';

function App() {
  return (
    <div className='className="bg-white dark:bg-slate-800"'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
