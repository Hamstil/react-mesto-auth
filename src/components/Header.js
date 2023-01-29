import React from "react";
import headerLogo from "../images/logo.svg";
import { Link, Switch, Route } from "react-router-dom";

function Header({emailUser, handleLogout}) {
  return (
    <header className="header page__header">
      <img src={headerLogo} alt="Логотип: Mesto" className="header__logo" />
      <Switch>
        <Route exact path="/">
          <div className="header__block-user">
            <p className="header__email">{emailUser}</p>
            <Link to="/sign-in" className="header__link header__link_dark" onClick={handleLogout}>Выйти</Link>
          </div>
        </Route>
        <Route path="/sign-up">
          <Link className="header__link" to="/sign-in">Войти</Link>
        </Route>
        <Route path="/sign-in">
          <Link className="header__link" to="/sign-up">Регистрация</Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
