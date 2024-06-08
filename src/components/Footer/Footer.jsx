import "./Footer.css";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__section">
                <h4>Sobre Nosotros</h4>
                <p>Descubre más sobre nuestra misión y valores.</p>
            </div>
            <div className="footer__section">
                 <h4>Cursos</h4>
                 <ul>
                    <li>
                        <a href="/cursos/desarrollo-web">Desarrollo Web</a>
                     </li>
                     <li>
                         <a href="/cursos/desarrollo-movil">Desarrollo Móvil</a>
                    </li>
                </ul>
            </div>
            <div className="footer__section">
                <h4>Recursos para Estudiantes</h4>
                <ul>
                    <li>
                        <a href="/ayuda">Centro de Ayuda</a>
                    </li>
                    <li>
                        <a href="/faqs">FAQs</a>
                    </li>
                </ul>
            </div>
            <div className="footer__section">
                <h4>Síguenos</h4>
                <div className="social__links">
                    <a href="https://facebook.com">
                        <FacebookOutlined />
                    </a>
                    <a href="https://instagram.com">
                        <InstagramOutlined />
                    </a>
                    {/* Otros iconos de redes sociales */}
                </div>
            </div>
            <div className="footer__section">
             <h4>Contacto</h4>
                <a href="mailto:info@sakurakode.academy">
                    info@sakurakode.academy
                 </a>
            </div>
        </footer>
    )
}

export default Footer;