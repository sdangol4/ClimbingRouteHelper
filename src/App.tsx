import './App.css'

import Admin from './Pages/Admin.js';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage.js';
import NotFoundPage from './Pages/NotFoundPage.js';
import RouteDetails from './Pages/RouteDetails.js'
const router = createBrowserRouter([
  { path: "/admin", element: <Admin /> },
  { path: "/", element: <HomePage /> },
  {path:"*",element:<NotFoundPage />},
  {path:"/App/:id",element:<RouteDetails />}

]);

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
