import React from 'react'
import {Link} from 'react-ro'
function Navbar() {
  return (
    <div>
       <div className='nav-bar'>
         <div className='nav-logo'>
          <h1>Trippy</h1>
         </div>
         <div className='nav-icons'>
         <li><Link to ="/">Home</Link></li>
         <li><Link to ="/about">About</Link></li>
         <li><Link to ="/contact">Contact</Link></li>
         <li><Link to ="/service">Service</Link></li>
         </div>
       </div>
    </div>
  )
}

export default Navbar
