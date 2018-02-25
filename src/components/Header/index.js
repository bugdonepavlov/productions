import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Basket from "./Basket";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container">
      <Link href="/" className="navbar-brand" to="/">Restariano</Link>
      <Basket/>
    </div>
  </nav>);

export default Header;
