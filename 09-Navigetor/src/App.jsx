import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Routes/Layout';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import ServiceDetail from './Components/Pages/ServiceDetail';
import Contact from './Components/Pages/Contact';
import NotFound from './Components/Pages/NotFound';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'services/:id',
          element: <ServiceDetail />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;