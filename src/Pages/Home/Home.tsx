import React, { useState } from "react";
import "./Home.css";
import { IoMdLogIn } from "react-icons/io";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes, FaUsers, FaClock } from "react-icons/fa";
import logo from "../../assets/Logo1.png";

const Home: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
      <div className="containerH">
        <header className="headerH">
          <div className="logoH">
            <img src={logo} alt="Ceccic Logo" />
          </div>
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={`navH ${isMenuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#palestras" onClick={closeMenu}>
              Palestras
            </a>
            <a href="#apoiadores" onClick={closeMenu}>
              Apoiadores
            </a>
            <a href="#contacto" onClick={closeMenu}>
              Contactos
            </a>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
          </nav>
          <button
            className="btnH"
            onClick={() => {
              window.location.href = "http://linkdosegundosite";
            }}
          >
            <IoMdLogIn className="icon1H" /> Cadastrar
          </button>
        </header>
        <main className="mainH">
          <div className="BordaH">
            <div className="contentH">
              <h1 className="titleH">Ceccic</h1>
              <p className="subtitleH">
                CIMEIRA INTERNACIONAL IBÉRO-AMERICANO E ESPAÑA SOBRE CONTAS E
                REMESSA DA DÍASPORA 3-CONTINENTAL.
              </p>
              <p className="boldH">
                <FaUsers className="icon-info" /> Brasil Cimeira Internacional
                Paralela América Latina e África sobre Migração e Remessa da
                Diáspora.
              </p>
              <div className="infoH">
                <span>
                  <FaClock className="icon-info" /> De 09 a 11 de julho de 2025
                  <br />
                </span>
              </div>
            </div>
            <button
              className="btnH1"
              onClick={() => {
                window.location.href = "http://linkdosegundosite";
              }}
            >
              <IoMdLogIn className="icon1H" /> Cadastrar
            </button>
          </div>
        </main>
        <footer className="footerH">
          <div className="social-linksH">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="invite-containerH">
            <a
              href="https://wa.me/55618151279"
              target="_blank"
              rel="noopener noreferrer"
              className="invite-btnH"
            >
              Solicitar convite
            </a>
            <a
              href="https://wa.me/55618151279"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="whatsapp-iconH" />
            </a>
          </div>
        </footer>
      </div>
    );
};

export default Home;
