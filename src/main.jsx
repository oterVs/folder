import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, HashRouter, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

import Personal from './pages/Personal'
import Projects from './pages/Projects'
import Error
 from './pages/Error'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Personal></Personal>,
    errorElement: <Error></Error>
  },
  {
    path: '/projects',
    element: <Projects></Projects>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} basename="folder"></RouterProvider>

  </React.StrictMode>,
)
