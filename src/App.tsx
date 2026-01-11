import './App.css'

import Admin from './Pages/Admin.js';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage.js';

const router = createBrowserRouter([
  { path: "/admin", element: <Admin /> },
  { path: "/", element: <HomePage /> }
]);

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
