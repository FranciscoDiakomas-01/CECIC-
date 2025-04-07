import { useState } from "react";
import "./Programa.css";
import "../../CECCIC/animations.css";

const dias = [
  {
    id: 1,
    data: "09 Jul 2024",
    eventos: [
      { horario: "08:30 - 09:30", descricao: "Credenciamento e Networking de boas-vindas"},
      { horario: "09:30 - 10:00", descricao: "Momento Cultural e Exposição de alguma arte"},
      { horario: "10:00 - 11:00", descricao: "Mesa Redonda: Educação e Formação para Migrantes: Um caminho para a Inclusão"},
      { horario: "11:00 - 12:00", descricao: "Mesa Redonda: O Impacto das Remessas no Desenvolvimento Local"},
      { horario: "12:00 - 13:00", descricao: "Intervalo", local: "Área de alimentação" },
      { horario: "13:15 - 13:30", descricao: "Momento Cultural: Poesia ou teatro"},
      { horario: "13:30 - 14:30", descricao: "Mesa Redonda: Restituição sobre o Evento da Criação do Fundo do Impacto Lusófono"},
      { horario: "14:30 - 14:45", descricao: "Palavras de Acolhimento do Diretor do Ceccic"},
      { horario: "14:45 - Encerramento", descricao: "Encerramento e Networking"}
    ]
  },
  {
    id: 2,
    data: "10 Jul 2024",
    eventos: [
      { horario: "08:30 - 09:30", descricao: "Credenciamento e Networking de boas-vindas" },
      { horario: "09:30 - 10:00", descricao: "Momento Cultural e Exposição de alguma arte" },
      { horario: "10:00 - 11:00", descricao: "Mesa Redonda: Educação e Formação para Migrantes: Inclusão e Libertação da Migração Irregular e Riscos do Itinerário Marítimo" },
      { horario: "11:00 - 12:00", descricao: "Mesa Redonda: O Impacto das Remessas no Desenvolvimento Local" },
      { horario: "12:00 - 13:00", descricao: "Intervalo", local: "Área de alimentação" },
      { horario: "13:15 - 13:30", descricao: "Momento Cultural: Poesia ou teatro" },
      { horario: "13:30 - 14:30", descricao: "Mesa Redonda: Compromisso Global com a Migração Sustentável" },
      { horario: "14:30 - 14:45", descricao: "Palavras de Acolhimento das Autoridades Espanholas e Parceiros" },
      { horario: "14:45 - Encerramento", descricao: "Encerramento e Networking" }
    ]
  },
  {
    id: 3,
    data: "11 Jul 2024",
    eventos: [
      { horario: "08:30 - 09:30", descricao: "Credenciamento e Networking de boas-vindas" },
      { horario: "09:30 - 10:00", descricao: "Momento Cultural e Exposição de alguma arte" },
      { horario: "10:00 - 12:00", descricao: "Workshop Colaborativo: Estratégias Conjuntas para a Década 2025 - 2035" },
      { horario: "12:00 - 13:00", descricao: "Intervalo", local: "Área de alimentação" },
      { horario: "13:15 - 14:00", descricao: "Continuação do Workshop Colaborativo" },
      { horario: "14:00 - 14:45", descricao: "Palavras de Acolhimento do Diretor do Ceccic" },
      { horario: "14:45 - Encerramento", descricao: "Encerramento e Networking" }
    ]
  }
];


export default function Programa() {
  const [diaSelecionado, setDiaSelecionado] = useState(1);
  
  return (
    <div className="programa-container">
      <div className="descricao animate-slide-up">
        <h1>Programa Do Evento</h1>
        <h2>Lista de Eventos Planeados neste colóquio</h2>
        <p>A cimeira realizar-se-á nos dias 26, 27 e 28 de novembro de 2024.</p>
        <p>Portugal, Lisboa. Hotel Tivoli</p>
        <p>Esta é uma lista detalhada dos eventos do Cimeira Internacional de 2024.</p>
        <p>Colóquio contará com a participação de renomados especialistas de diferentes países da CPLP, incluindo Portugal, Brasil, Angola, Moçambique e Cabo Verde Guiné Equatorias, Guiné Bissau, São Tomé e Principe, Timor Leste.</p>
      </div>
      
      <div className="carrossel animate-fade-in delay-1">
        <div className="dias">
          {dias.map((dia) => (
            <button 
              key={dia.id} 
              className={`${diaSelecionado === dia.id ? "ativo" : ""} animate-scale delay-${dia.id}`}
              onClick={() => setDiaSelecionado(dia.id)}
            >
              Dia {dia.id} <br /> {dia.data}
            </button>
          ))}
        </div>
        
        <div className="eventos">
          {dias.find((d) => d.id === diaSelecionado)?.eventos.map((evento, index) => (
            <div 
              key={index} 
              className={`evento animate-slide-up delay-${index + 1}`}
            >
              <p className="horario">{evento.horario}</p>
              <p className="descricao"><strong>{evento.descricao}</strong></p>
              <p className="local">{evento.local}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}