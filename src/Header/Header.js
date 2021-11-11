import { Link } from "react-router-dom";



function Header() {
  return (
    <>
      <div className="header">
        <img src="./images/0.PNG"></img>
        <Link to="/">Главная</Link>
        <Link to="/portfolio">Портфолио</Link>
        <Link to="/service">Услуги</Link>
      </div>
    </>
  );
}

export default Header;
