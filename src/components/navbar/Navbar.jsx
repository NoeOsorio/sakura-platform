import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { userInfo } = useAuth();

  console.log(userInfo);
  const { first_name, last_name } = userInfo;
  return (
    <nav id="menu">
      <input type="checkbox" id="responsive-menu" />
      <label></label>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/progreso">Mi Progreso</Link>
        <Link to="/cursos">Cursos</Link>
        <div className="profile__container">
          {userInfo && (
            <Link to="/profile">
              {first_name} {last_name}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
