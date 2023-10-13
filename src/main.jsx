import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import { NextUIProvider } from '@nextui-org/system'
import { RouterProvider } from "react-router-dom";
import { router } from './Router/route';
import AuthProvider from './Provider/AuthProvider';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>

          <RouterProvider router={router} />
        </QueryClientProvider>

      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
