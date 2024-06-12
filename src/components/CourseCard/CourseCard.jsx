import {useNavigate} from "react-router-dom";
import TestImage from "../../assets/images/test image 1.jpeg";
import "./CourseCard.css";

export default function CourseCard({
  title = "Funciones",
  description = "Frontend",
  progress = 80,
  id = 0 
}) {
  const navigate = useNavigate();
  return (
    <div
      className="course__card"
      onClick={() => {
        navigate(`/cursos/${id}`);
      }}
    >
      <img src={TestImage} alt="Curso" width={200} height={150} />
      <div
        className="course__progress-bar"
        style={{ width: progress + "%" }}
      ></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
