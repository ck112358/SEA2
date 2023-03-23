import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <a href="/">
          <img className="logo" src="/assets/img/logo.png" alt="Logo" />
        </a>
        <h1 className="title">Stockholm Employee Association</h1>
        <a href="/cart">
          <img className="cart-icon" src="/assets/img/taco_truck.jpg" alt="Shopping Cart" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
