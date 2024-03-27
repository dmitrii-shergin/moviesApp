import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { FilmsPage } from './pages/FilmsPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { useAppDispatch } from './store/store.ts';
import { setUser } from './store/slices/userSlice';
import './firebase';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='films' element={<FilmsPage />} />
      <Route path='signIn' element={<SignInPage />} />
      <Route path='signUp' element={<SignUpPage />} />
    </Route>,
  ),
);

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const authorizedUser = {
          id: user.uid,
          token: user.refreshToken,
          email: user.email,
        };
        dispatch(setUser(authorizedUser));
      }
    });
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export { App };
