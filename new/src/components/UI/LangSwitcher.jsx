import React from "react";
import "../Header/Header.scss";

const LangSwitcher = () => {
  return (
    <div>
      <ul className="lang-switcher">
        <a className="lang-ru">
          <li>RU</li>
        </a>
        <a href="en-US/index.html" className="lang-en">
          <li>EN</li>
        </a>
      </ul>
    </div>
  );
};

export default LangSwitcher;
