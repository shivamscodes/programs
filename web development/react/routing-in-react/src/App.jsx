import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/home';
import About from './components/About';
import Dashboard from './components/dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import Mocktest from './components/Mocktest';
import Report from './components/Report'
import Notfound from './Notfound';

const router = createBrowserRouter(
  [
    {path:"/", element: <div>
      <Home/>
      <Navbar></Navbar>
    </div>
    },
    {
      path:"/about",
      element:
      <div>
      <About/>
      <Navbar></Navbar>
    </div>
    },
    {
      path:"/dashboard", element:
      <div>
      <Dashboard/>
      <Navbar></Navbar>
    </div>,
    children:[
      {
        path:"courses",
        element:<Courses/>
      },
      {
        path:"mocktest",
        element:<Mocktest/>
      },
      {
        path:"report",
        element:<Report/>
      },
    ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar></Navbar>
        <ParamComp/>
      </div>
    },
    {
      path:"*",
      element:<Notfound/>
    }
  ] 
);

function App() {


  return (
   <div>
       <RouterProvider router={router}/>
       
   </div>
  )
}

export default App
