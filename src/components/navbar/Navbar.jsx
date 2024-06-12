import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { userInfo } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  console.log(userInfo);
  const { first_name, last_name } = userInfo;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        Sakura Academy
      </Link>
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <Link onClick={closeMenu} to="/">
            Inicio
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={closeMenu} to="/cursos">
            Cursos
          </Link>
        </li>

        <li className="navbar-item profile">
          {userInfo && (
            <Link onClick={closeMenu} to="/profile">
              {first_name} {last_name}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
  // return (
  //   <nav id="menu">
  //     <input type="checkbox" id="responsive-menu" />
  //     <label></label>
  //     <div className="links">
  //       <Link onClick={closeMenu} to="/">Home</Link>
  //       <Link to="/progreso">Mi Progreso</Link>
  //       <Link to="/cursos">Cursos</Link>
  //       <div className="profile__container">
  //         {userInfo && (
  //           <Link to="/profile">
  //             {first_name} {last_name}
  //           </Link>
  //         )}
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;
