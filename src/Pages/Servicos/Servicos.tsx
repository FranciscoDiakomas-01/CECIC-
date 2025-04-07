import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Servicos.css';

const Servicos: React.FC = () => {
    return (
        <div className="servicos-container" id="servicos">
            <div className="servicos-content">
                <h1 className="servicos-title">O QUE FAZEMOS?</h1>
                <div className="servicos-grid">
                    <div className="servico-card">
                        <h2>Produção do Conhecimento</h2>
                        <p>Realização de investigação e iniciativas no âmbito dos planos de atividades do Centro.</p>
                    </div>
                    <div className="servico-card">
                        <h2>Difusão do Conhecimento</h2>
                        <p>Política de publicação em revistas científicas, atas, livros e outros meios.</p>
                    </div>
                    <div className="servico-card">
                        <h2>Promoção Acadêmica</h2>
                        <p>Organização de encontros académicos, conferências e intercâmbios com instituições similares.</p>
                    </div>
                    <div className="servico-card">
                        <h2>Eventos e Formação</h2>
                        <p>Realização de Simpósios, Seminários e cursos de formação.</p>
                    </div>
                    <div className="servico-card">
                        <h2>Cooperação</h2>
                        <p>Estabelecimento de pontes em cooperação e parcerias interorganizacionais.</p>
                    </div>
                </div>
                <div className="whatsapp-section">
                    <a 
                        href="https://wa.me/55618151279" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="whatsapp-button"
                    >
                        <FaWhatsapp className="whatsapp-icon" />
                        Solicitar Serviços via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Servicos; 