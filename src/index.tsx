import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './components/Auth/SignIn';
import Main from './routes/Main/Main';
import Home from './routes/Home/Home';
import Recipe from './routes/Recipe/Recipe';
import {loader as genericLoader} from './utils/react-router-utils'
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/defaultTheme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/recipe/:id",
    element: <Recipe />,
    loader: genericLoader,
  },
  {
    path: "/login",
    element: <SignIn />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);