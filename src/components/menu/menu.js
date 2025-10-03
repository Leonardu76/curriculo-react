import React, { useState } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ThemeProvider, useTheme } from "../theme/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="switch-wrapper" onClick={toggleTheme}>
      <div className={`switch ${theme}`}>
        <span className="icon">☀️</span>
        <span className="icon">🌙</span>
        <div className="slider" />
      </div>
    </div>
  );
}

const Menu = (props) => {
  const { url } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider>
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`menu-card col-12 col-md-3 col-lg-2 ${isOpen ? "open" : ""}`}>
        <div className="menu-ul">
          <Link to={"/"} className={url === "home" ? "active " : "menu-li"}>
            <span>Início</span>
          </Link>
          <Link to={"/about"} className={url === "about" ? "active" : "menu-li"}>
            <span>Sobre</span>
          </Link>
          <Link
            to={"/resume"}
            className={url === "resume" ? "active" : "menu-li"}
          >
            <span>Experiências</span>
          </Link>
          <Link
            to={"/portfolio"}
            className={url === "portfolio" ? "active" : "menu-li"}
          >
            <span>Projetos</span>
          </Link>
          <Link
            to={"/contact"}
            className={url === "contact" ? "active" : "menu-li"}
          >
            <span>Contato</span>
          </Link>
        </div>

        <div className="redes-menu">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.linkedin.com/in/leonardo-oliveira-3b0446176/"
            className="icon-border-menu"
          >
            <SlSocialLinkedin className="icon" />
          </a>

          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/Leonardu76"
            className="icon-border-menu"
          >
            <VscGithubAlt className="icon" />
          </a>

          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5531985808502&text=Olá! Vim através do site"
            className="icon-border-menu"
          >
            <AiOutlineWhatsApp className="icon" />
          </a>
        </div>

        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default Menu;
