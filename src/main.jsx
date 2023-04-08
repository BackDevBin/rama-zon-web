import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OderDisplay from './components/OderDisplay/OderDisplay';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:"order",
        element: <OderDisplay></OderDisplay>
      },
      {
        path:"/",
        element: <Shop></Shop>
      },
      {
        path:"/shop",
        element: <Shop></Shop>
      }
    ] 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
