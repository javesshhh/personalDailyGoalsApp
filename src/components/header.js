// function Header() {
//     return (
//       <div>
//         hello world
//       </div>
//     );
//   }
//   function Header1() {
//     return (
//       <div>
//         hello world
//       </div>
//     );
//   }
//   function Header2() {
//     return (
//       <div>
//         hello world
//       </div>
//     );
//   }

// export {Header1,Header2}
// export default Header;
import React from "react";
import "./header.css";
import {Link} from "react-router-dom"
function header() {
  return <>
    <nav>
      Get ready to complete your daily tasks
    </nav>
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/User">User</Link>
    </div>
  </>
}

export default header;
