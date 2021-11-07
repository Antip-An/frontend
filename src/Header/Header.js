import { Link } from "react-router-dom";



function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">Главная</Link>
        <Link to="/portfolio">Портфолио</Link>
      </div>
    </>
  );
}

export default Header;
