import { Link } from "react-router-dom";
import styles from "../Header/Header.css";
import logo from "../images/0.PNG";



function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} class={styles.img}></img>
        <div className="nav">
          <Link to="/">Главная</Link>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/service">Услуги</Link>
        </div>
        <Link to="/profile">
          <button className="btn-primary">
            Профиль
          </button>
        </Link>
      </div>
    </>
  );
}

export default Header;
