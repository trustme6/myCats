import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  Upload } from './App';
import { Home } from './routes/Home';
import { About } from './routes/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/upload",
    element: <Upload/>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root') as Element );
root.render(

  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>

);


