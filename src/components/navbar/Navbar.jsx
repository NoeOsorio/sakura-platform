import "./Navbar.css";

const Navbar = () => {
    return (
        <nav id="menu">
              <input type="checkbox" id="responsive-menu" />
      <label></label>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">Explora</a>
        <a href="#services">Mi Progreso</a>
        <a href="#portfolio">Cursos</a>
        <div className="profile__container">
          <span>Robin</span>
         
        </div>
      </div>
    </nav>
    )
}

export default Navbar;