import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeB.css";
import { IoMdLogIn } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight, HiMenu, HiX } from "react-icons/hi";
import logo from "../../../assets/Logo1.png";

const carouselData = [
    {
        title: "CIMEIRA INTERNACIONAL IBÉRO-AMERICANO E ESPAÑOLA SOBRE CONTAS E REMESSA DA DÍASPORA 3-CONTINENTAL.",
        text: "Evento de Centro de Estudos da Comunicação Cooperativa e da Investigação Científica"
    },
    {
        title: "Tecnologia e Inovação no Desenvolvimento Sustentável",
        text: "A conferência abordará o impacto da tecnologia na sustentabilidade e como inovação pode transformar comunidades."
    },
    {
        title: "O Papel da Educação na Construção do Futuro",
        text: "Especialistas discutirão como a educação pode impulsionar o crescimento e reduzir desigualdades sociais."
    }
];

const HomeB: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const nextSlide = () => {
        if (isTransitioning) return;
        setDirection('next');
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
            setIsTransitioning(false);
        }, 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setDirection('prev');
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
            setIsTransitioning(false);
        }, 500);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Auto-play do carrossel
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="containerB">
            <header className="headerB">
                <div className="logoB">
                    <img src={logo} alt="Ceccic Logo" />
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
                <nav className={`navB ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#Programa">Programa</a>
                    <Link to="#Palestrantes">Palestrantes</Link>
                    <a href="#Parceiros">Parceiros</a>
                    <a href="#Servicos">Serviços</a>
                    <a href="#contactob">Contactos</a>
                </nav>
                <button className="btnB" onClick={() => window.location.href = "/cadastro"}>
                    <IoMdLogIn className="icon1" /> Cadastrar
                </button>
            </header>
            <main className="mainB">
                <div className="carousel-wrapper">
                    <HiChevronLeft className="arrow prev" onClick={prevSlide} />
                    <div className={`carousel-content ${direction} ${isTransitioning ? 'transitioning' : ''}`}>
                        <h1>{carouselData[currentIndex].title}</h1>
                        <p>{carouselData[currentIndex].text}</p>
                    </div>
                    <HiChevronRight className="arrow next" onClick={nextSlide} />
                </div>
            </main>
            <footer className="footerB">
                <div className="social-linksB">
                    <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
            </footer>
        </div>
    );
};

export default HomeB;
