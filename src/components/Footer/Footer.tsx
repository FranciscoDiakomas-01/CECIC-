import React from 'react';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/Logo3.png';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-section logo-section">
                        <img src={logo} alt="CECCIC Logo" className="footer-logo" />
                    </div>

                    <div className="footer-section legal-section">
                        <h3>Informações Legais</h3>
                        <div className="legal-info-columns">
                            <div className="legal-column">
                                <p>SARL. Portadora do Número de Certidão de Escritura da Constituição da Sociedade 2517 Legal, reconhecida, e do número da Identificação Fiscal NIF: 510399037, da Certidão Negativa de Sociedade Sob Número 2614.</p>
                            </div>
                            <div className="legal-column">
                                <p>Número da Formalidade de registo Funcional: GW.BXO.2025.B.1219</p>
                                <p>Sede: República da Guiné-Bissau, Cidade de Bissau, Bairro de Penha Zonas das Embaixadas Rua Penha Rico; Codex Bissau: 1031, Caixa Postal: 369</p>
                            </div>
                            <div className="legal-column">
                                <p>Legalmente representado pelo seu Presidente da Comissão Diretiva e Diretor-Geral da Pesquisa; Senhor Suaré BALDÉ, Guineense com a residência fixa e domiciliada em Bissau, República da Guiné-Bissau e no Brasil</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section social-section">
                        <h3>Redes Sociais</h3>
                        <div className="social-links">
                            <a href="https://wa.me/55618151279" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-organization">Grupo Internacional - CECCIC</p>
                <p className="footer-full-name">© Centro de Estudos da Comunicação Cooperativa e da Investigação Científica</p>
            </div>
        </footer>
    );
};

export default Footer; 