import React from 'react';
import {Link} from "react-router-dom";
import './header.scss'

const Header = () => {
    return (
    <header className="header">
      <Link to="/" type="button" className="header__tranding">Trending</Link>
      <Link to="/random" type="button" className="header__random">Random</Link>
    </header>
    );
};

export default Header;