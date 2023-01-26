import React from "react";
import headerLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__header">
      <img src={headerLogo} alt="Логотип: Mesto" className="header__logo" />
    </header>
  );
}

export default Header;
