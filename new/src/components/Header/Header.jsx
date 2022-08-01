import React from "react";
import Burger from "../UI/Burger";
import LangSwitcher from "../UI/LangSwitcher";
import Logo from "./img/logo.png";
import Loupe from "./img/loupe.svg";
import "./Header.scss";

const header = () => {
  return (
    <div>
      <section className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__side-left">
              <Burger />
              <a href="ru-RU/index.html" className="header__logo">
                <img src={Logo} alt="" />
              </a>
              <LangSwitcher />
            </div>
            <div className="header__side-center">
              <nav className="header__nav">
                <a href="ru-RU/about.html" className="header__nav-link">
                  О НАC
                </a>
                <a href="ru-RU/services.html" className="header__nav-link">
                  УСЛУГИ И ЦЕНЫ
                </a>
                <a href="ru-RU/main.html" className="header__nav-link">
                  ГЛАВНАЯ
                </a>
                <a href="ru-RU/reviews.html" className="header__nav-link">
                  ОТЗЫВЫ
                </a>
              </nav>
            </div>
            <div className="header__side-right">
              <a href="ru-RU/sign-in.html" className="header__login">
                АВТОРИЗАЦИЯ
              </a>
              <a href="#" className="profile__avatar">
                <img src="https://via.placeholder.com/70" alt="" />
              </a>
              <div className="header__search">
                <img src={Loupe} alt="" />
              </div>
              <label className="header__search-box">
                <input
                  type="search"
                  className="search__box"
                  placeholder="Введите ключевое слово"
                />
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default header;
