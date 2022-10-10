import React from "react";
import { useState } from "react";
import "../Header/Header.scss";

const LangSwitcher = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <ul
        className={`lang-switcher ${isActive ? "active" : ""}`}
        onClick={handleToggle}
      >
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
