import { Link } from "react-router-dom";
import './header.css'


function Header({onOpen}) {
  return (
    <header className="header">
      <Link className="header__tranding" to={'/'}>Tranding</Link>
      <Link className="header__random" to={'/random'}>Random</Link>
      <button className="header__btn" onClick={onOpen}>Categories</button>
    </header>
  );
}

export default Header;
