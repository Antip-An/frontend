import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="nav">
          <Link to="/">Главная</Link>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/service">Услуги</Link>
        </div>
      </div>
      <h3>Салон Татуировки © 2021 STUDIA</h3>
      <h3>Все права защищены</h3>
    </>
  );
}

export default Footer;