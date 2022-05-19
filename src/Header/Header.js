import { Link } from "react-router-dom";
import styles from "../Header/Header.css";
import logo from "../images/0.png";



function Header() {
  const token = localStorage.getItem("token")

  return (
    <div className="header">
      <img src={logo} class={styles.img} alt="logo"></img>
      <div className="nav">
        <Link to="/">Главная</Link>
        <Link to="/portfolio">Портфолио</Link>
        <Link to="/service">Услуги</Link>
      </div>
      {
        token ?
          (
            <Link to="/profile">
              <button className="button-primary">
                Профиль
              </button>
            </Link>
          ) : (
            <>
              <Link to="/signup">
                <button className="button-primary">
                  Регистрация
                </button>
              </Link>
              <Link to="/login">
                <button className="button-primary">
                  Авторизация
                </button>
              </Link>
            </>
          )
      }
    </div>
  );
}

export default Header;
