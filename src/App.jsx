import React from 'react'
import Home from './packages/Home/Home'
import About from './packages/About/About'
import Contact from './packages/Contact/Contact'
import Projects from './packages/Projects/Projects'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/AppLayout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: '/about',
          element: <About />,
        },

        {
          path: '/projects',
          element: <Projects />,
        },

        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;