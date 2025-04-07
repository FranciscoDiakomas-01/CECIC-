import React, { useState, useEffect } from "react";
import "./Palestrantes.css";
import "../../CECCIC/animations.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaUser, FaPhone,  FaUsers} from "react-icons/fa";
import Sauré_Baldé from "../../../assets/Sauré Baldé.jpg";
import PhD_Jean_Karim_Coly from "../../../assets/PhD.Jean Karim Coly.jpg";
import Ph_D_João_Salm from "../../../assets/Ph-D. João Salm.jpg";
import Patricia_Lobo from "../../../assets/Patricia Lobo.jpg";
import João_Kanda from "../../../assets/João Kanda.jpg";
import Janealle_Neri from "../../../assets/Janealle  Neri.jpg";
import Eng_Horacio_Pina_Prata from "../../../assets/Eng.Horacio Pina Prata.jpg";
import Dra_Alice_dos_Anjos from "../../../assets/Dra.Alice dos Anjos.jpg";
import Dra_Catarina_Munguambe from "../../../assets/Dra. Catarina Munguambe.jpg";
import Barbara_Andrade from "../../../assets/Barbara Andrade.jpg";
import Sr_Jefferson_Olivereira from "../../../assets/Sr. Jefferson Olivereira.jpg";
import Comendador_José_Ferreira from "../../../assets/Comendador José Ferreira Morais.jpg";

// Dados dos palestrantes
const palestrantes = [
  {
    id: 1,
    nome: "Sauré Baldé",
    cargo: "Presidente da Assembleia Nacional",
    instituicao: "Guiné-Bissau",
    imagem: Sauré_Baldé
  },
  {
    id: 2,
    nome: "PhD. Jean Karim Coly",
    cargo: "Especialista em Cooperação Internacional",
    instituicao: "Instituto de Relações Internacionais",
    imagem: PhD_Jean_Karim_Coly
  },
  {
    id: 3,
    nome: "Ph.D. João Salm",
    cargo: "Consultor de Desenvolvimento Sustentável",
    instituicao: "ONG Global Impact",
    imagem: Ph_D_João_Salm
  },
  {
    id: 4,
    nome: "Patricia Lobo",
    cargo: "Pesquisadora em Economia Global",
    instituicao: "Centro de Estudos Econômicos",
    imagem: Patricia_Lobo
  },
  {
    id: 5,
    nome: "João Kanda",
    cargo: "Especialista em Políticas Públicas",
    instituicao: "Instituto de Governança",
    imagem: João_Kanda
  },
  {
    id: 6,
    nome: "Janealle Neri",
    cargo: "Especialista em Direito Internacional",
    instituicao: "Universidade de Lisboa",
    imagem: Janealle_Neri
  },
  {
    id: 7,
    nome: "Eng. Horacio Pina Prata",
    cargo: "Engenheiro Civil",
    instituicao: "Empresa de Construção",
    imagem: Eng_Horacio_Pina_Prata
  },
  {
    id: 8,
    nome: "Dra. Alice dos Anjos",
    cargo: "Médica",
    instituicao: "Hospital Central",
    imagem: Dra_Alice_dos_Anjos
  },
  {
    id: 9,
    nome: "Dra. Catarina Munguambe",
    cargo: "Pesquisadora",
    instituicao: "Instituto de Pesquisa",
    imagem: Dra_Catarina_Munguambe
  },
  {
    id: 10,
    nome: "Barbara Andrade",
    cargo: "Especialista em Comunicação",
    instituicao: "Agência de Comunicação",
    imagem: Barbara_Andrade
  },
  {
    id: 11,
    nome: "Sr. Jefferson Olivereira",
    cargo: "Consultor",
    instituicao: "Empresa de Consultoria",
    imagem: Sr_Jefferson_Olivereira
  },
  {
    id: 12,
    nome: "Comendador José Ferreira",
    cargo: "Presidente do CECCIC",
    instituicao: "CECCIC",
    imagem: Comendador_José_Ferreira
  }
];

const Palestrantes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    modalidade: "presencial",
    numInscritos: "1",
    telefone: "",
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % palestrantes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + palestrantes.length) % palestrantes.length);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="palestrantes-container">
      <div className="palestrantes-header">
        <h1>Nossos Palestrantes</h1>
        <p>Conheça os especialistas que participarão da Cimeira Internacional</p>
      </div>

      <div 
        className="carousel-containerPP"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="carousel-button prev" onClick={prevSlide}>
          <HiChevronLeft />
        </button>

        <div className="carousel-wrapperPP">
          {palestrantes.map((palestrante, index) => (
            <div
              key={palestrante.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="palestrante-card">
                <div className="palestrante-imagem">
                  <img src={palestrante.imagem} alt={palestrante.nome} />
                </div>
                <div className="palestrante-info">
                  <h3 className="palestrante-nome">{palestrante.nome}</h3>
                  <p className="palestrante-cargo">{palestrante.cargo}</p>
                  <p className="palestrante-instituicao">{palestrante.instituicao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button next" onClick={nextSlide}>
          <HiChevronRight />
        </button>
      </div>

      <div className="carousel-indicators">
        {palestrantes.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="inscricao-section">
        <div className="inscricao-content">
          <div className="inscricao-promo">
            <h2>Participe da Cimeira Internacional</h2>
            <p className="preco">Apenas 75€</p>
            <ul className="beneficios">
              <li>✓ Acesso a todas as palestras</li>
              <li>✓ Material didático exclusivo</li>
              <li>✓ Certificado de participação</li>
              <li>✓ Networking com especialistas</li>
            </ul>
            <p className="vagas">Vagas limitadas! Garanta sua participação agora.</p>
          </div>

          <form onSubmit={handleSubmit} className="inscricao-form">
            <h3>Faça sua Inscrição</h3>
            
            <div className="form-group">
              <FaUser className="form-icon" />
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaUser className="form-icon" />
              <input
                type="text"
                name="sobrenome"
                placeholder="Sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="modalidade"
                value={formData.modalidade}
                onChange={handleChange}
                className="form-select"
              >
                <option value="presencial">Presencial</option>
                <option value="online">Online</option>
              </select>
            </div>

            <div className="form-group">
              <FaUsers className="form-icon" />
              <input
                type="number"
                name="numInscritos"
                min="1"
                value={formData.numInscritos}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaPhone className="form-icon" />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Inscrever-se Agora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Palestrantes; 