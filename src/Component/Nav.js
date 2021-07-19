import './Nav.css'
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <a   className="navbar-brand brand " href="google.com">My Gallery</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
         </button>
          <div classname="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
     
      <li className="nav-item">
        <a className="nav-link link1" href >About US</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link link1" href >Home</a>
      </li>
      
      
      <li className="nav-item">
        <a className="nav-link link1" href >Portfolio</a>
      </li>
      
      
      <li className="nav-item">
        <a className="nav-link link1" href >Categories</a>
      </li>
      
      
      <li className="nav-item">
        <a className="nav-link link1" href >Know more</a>
      </li>
      
      
      <li className="nav-item">
        <a className="nav-link link1" href >Sign in</a>
      </li>
      
      
 
     
    </ul>
          </div>
        </nav>
     
    )
}
export default Navbar;