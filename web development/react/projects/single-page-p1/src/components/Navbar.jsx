function Navbar(){
    return (
     <div className="container">
         <nav>
          <div className="logo">
            <img src="./images/brand_logo.png" alt="logo" />
            </div>  

            <ul>
              <li>menu</li>
              <li >location</li>
              <li >about</li>
              <li >contact</li>
            </ul>

            <button>Login</button>
      </nav> 
     </div>
    )
};


export default Navbar;