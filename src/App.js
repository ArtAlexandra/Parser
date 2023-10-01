import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
 
} from "react-router-dom";


import Main from './Main';
import ErrorURL from './ErrorURL';
import Footer from './Footer';
import Data from './Data';

const Layout = () => {
    return (
        <div>
            <Outlet />
            <Footer/>
        </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      {
        path: "/",
        element: <Navigate to="/home" />
      },
      {
        path: "/home",
        element: <Main/>
      },
      {
        path: "/data",
        element: <Data/>
      }
      
    
      
    ],
  },
 
  {
    path: "*",
    element:<ErrorURL/>
  },
  
]);

export default function App() {
    return (
        <div>
            <RouterProvider router={router} /> 
        </div>
    );
}


