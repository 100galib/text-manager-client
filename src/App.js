import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import {onAuthStateChanged, auth} from './Firebase/firebase';
import './App.css';
import router from './Components/Routes/Routes';
import { login, logout } from './features/counter/counterSlice';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

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
      <QueryClientProvider client={queryClient}><RouterProvider router={router}></RouterProvider></QueryClientProvider>
    </div>
  );
}

export default App;
