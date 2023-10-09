import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/system'
import { RouterProvider } from "react-router-dom";
import { router } from './Router/route';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      {/* <App /> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
