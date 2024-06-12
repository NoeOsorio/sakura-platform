import "./Cursos.css";
import TestImage from "../../assets/images/test image 1.jpeg";

export default function CursoDetail() {
  const {
    title = "The Foundation of Daily",
    description = "Helping you build a powerful habit",
    progress = 0,
  } = {};

  return (
    <section className="course-detail">
      <header>
        <div>
          <h2 className="course-detail__title">{title}</h2>
          <p className="course-detail__description">{description}</p>
          <div className="course-detail__buttons">
            <button className="course-detail__button">
              Compralo por $19.99
            </button>
            <button className="course-detail__button">
              Suscribete a clases en vivo por $1,200
            </button>
          </div>
        </div>
        <img src={TestImage} alt="Curso" width={400} height={300} />
      </header>

      <main>
        <h3>Descripción del curso</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          justo nec justo fermentum laoreet. Sed nec odio at quam tincidunt
          tincidunt. Nullam nec eros nec sem tincidunt ultrices. Nullam auctor
          purus vel sapien tincidunt, quis lacinia nunc congue. Nullam nec eros
          nec sem tincidunt ultrices. Nullam auctor purus vel sapien tincidunt,
          quis lacinia nunc congue.
        </p>
        <h3>Lo que aprenderás</h3>
        <ul>
          <li>Nullam nec eros nec sem tincidunt ultrices.</li>
          <li>Nullam auctor purus vel sapien tincidunt.</li>
          <li>Quis lacinia nunc congue.</li>
        </ul>
        <h3>Para quien es este curso</h3>
        <ul>
          <li>Nullam nec eros nec sem tincidunt ultrices.</li>
          <li>Nullam auctor purus vel sapien tincidunt.</li>
          <li>Quis lacinia nunc congue.</li>
        </ul>
      </main>
    </section>
  );
}
