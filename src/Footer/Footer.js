import { Link } from "react-router-dom";
import "./Footer.css"
function Footer() {
  return (
      <div className="footer">
        <div className="nav">
          <Link to="/">Главная</Link>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/service">Услуги</Link>
        </div>
      <span>Салон Татуировки © 2021 STUDIA</span>
      <span>Все права защищены</span>
      </div>
  );
}

export default Footer;