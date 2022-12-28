import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import {onAuthStateChanged, auth} from './Firebase/firebase';
import './App.css';
import router from './Components/Routes/Routes';
import { login, logout } from './features/counter/counterSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className='className="bg-white dark:bg-slate-800"'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
