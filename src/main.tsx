import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { FilmsPage } from './pages/FilmsPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';

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
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
