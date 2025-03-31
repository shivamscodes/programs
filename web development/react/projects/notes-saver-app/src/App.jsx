import './App.css'
import Home from './components/Home';
import Navbar from './components/navbar';
import Paste from './components/paste';
import Viewpaste from './components/viewpaste';
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter(
 [
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:"/paste",
    element:
    <div>
     <Navbar/>
     <Paste/>
    </div>
  },
  {
    path:"/paste/:id",
    element:
    <div>
      <Navbar/>
      <Viewpaste/>
    </div>
  },
]
);



function App() {

  return (
    <div>
   
   <RouterProvider router={router}/>
   
    </div>
    
    )
};

export default App
