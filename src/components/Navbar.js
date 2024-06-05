//Navbar
function Navbar()
{
  return(<div className="navbar">

  <div className="navbar__s1">
      <h1 className="navbar__s1__title">Udemy</h1>
  </div>

  <div className="navbar__s2">
      <i class="fa-solid fa-magnifying-glass" style={{color: '#060505'}}></i>
      <input placeholder="Search for anything here.Tech, Business, Arts..."></input>
  </div>
  <div className="navbar__s3">
      <p>Courses</p>
    
      <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
              <p>You didn't purchase anything yet</p>
          </div>
      </div>
      
      <div class="shoppingcart">
          <i className="fa-solid fa-cart-shopping" style={{color: '#050505'}}></i>
          <div className="shoppingcart__popup">
              <p>Your cart is empty</p>
          </div>
      </div>

      <i className="fa-solid fa-bell" style={{color: '#000205'}}></i>
      <i className="fa-solid fa-user" style={{color: '#0a0a0a'}}></i>
  </div>
  <div className="navbar__s4">
      <i className="fa-solid fa-bars"></i>
      <div className="menubar__popup">
          <p>My Learning</p>
          <p>Courses</p>
          <p>Categories</p>
      </div>


  </div>


</div>)
}

export default Navbar