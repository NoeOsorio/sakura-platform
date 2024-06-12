import "./Home.css";
import TestImage from "../../assets/images/test image 1.jpeg";

const Home = () => {
  return (
    <section>
      <section className="main">
        <section className="main__content">
          <span>Nivel Introductorio</span>
          <h1>Introducción al desarrollo web</h1>
          <div></div>
          <p>Fundamentos de la programacion con javascript</p>
          <section className="buttons">
            <div>
              <button className="main__button">Ver ahora</button>
            </div>
            <button className="icon__button">|||</button>
            <button className="icon__button">+</button>
            <button className="icon__button">-</button>
          </section>
        </section>
        <section className="main__course">
          <img src={TestImage} alt="Curso" width={400} height={300} />
        </section>
      </section>
      <section className="continue__watching">
        <h2>Continuar viendo</h2>
        <div className="course__list">
          <div className="course__card">
            <img src={TestImage} alt="Curso" width={200} height={150} />
            <div className="course__progress-bar" style={{ width: "80%" }}></div>
            <h3>Funciones</h3>
            <p>Frontend</p>
          </div>
          <div className="course__card">
            <img src={TestImage} alt="Curso" width={200} height={150} />
            <div className="course__progress-bar" style={{ width: "80%" }}></div>
            <h3>Funciones</h3>
            <p>Frontend</p>
          </div>
          <div className="course__card">
            <img src={TestImage} alt="Curso" width={200} height={150} />
            <div className="course__progress-bar" style={{ width: "80%" }}></div>
            <h3>Funciones</h3>
            <p>Frontend</p>
          </div>
          <div className="course__card">
            <img src={TestImage} alt="Curso" width={200} height={150} />
            <h3>Funciones</h3>
            <p>Frontend</p>
          </div>
          <div className="course__card">
            <img src={TestImage} alt="Curso" width={200} height={150} />
            <h3>Funciones</h3>
            <p>Frontend</p>
          </div>
          <div className="course__card">
            <img src={TestImage} alt="Curso" width={200} height={150} />
            <h3>Funciones</h3>
            <p>Frontend</p>
          </div>
        </div>
      </section>
      <section />
    </section>
  );
};

export default Home;
