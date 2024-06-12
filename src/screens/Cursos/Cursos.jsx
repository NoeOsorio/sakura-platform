import { CourseCard } from "../../components";
import "./Cursos.css";

export default function Cursos() {
  return (
    <section className="courses">
      <h1>Cursos</h1>
        <div className="courses__cards">
            <CourseCard title="Funciones" description="Frontend" progress={80} />
            <CourseCard title="Funciones" description="Frontend" progress={80} />
            <CourseCard title="Funciones" description="Frontend" progress={80} />
        </div>
    </section>
  );
}
