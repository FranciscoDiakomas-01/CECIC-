import React from "react";
import "./FAQ.css";

const FAQ: React.FC = () => {
  return (
    <div className="ContainerF">
      <header className="HeaderF">
        <h1>Áreas Estratégicas de Intervenção</h1>
      </header>
      <section className="sectionF">
        <div className="CardF">
          <h1>Reforma do Migrante e Economia Local</h1>
          <p>Promover a integração efetiva dos migrantes nas economias locais, garantindo oportunidades de desenvolvimento mútuo.</p>
        </div>
        <div className="CardF">
          <h1>Democracia e Mobilidade</h1>
          <p>Explorar como a mobilidade de pessoas pode fortalecer os princípios democráticos e ampliar a cooperação internacional.</p>
        </div>
        <div className="CardF">
          <h1>Evacuação em Missões Médicas e Êxodo</h1>
          <p>Implementar soluções rápidas e eficientes para evacuação em situações de emergência, priorizando a saúde e o bem-estar dos afetados.</p>
        </div>
        <div className="CardF">
          <h1>Direito de Asilo e Refúgio</h1>
          <p>Garantir a proteção dos direitos fundamentais dos refugiados e requerentes de asilo, promovendo um ambiente seguro e acolhedor.</p>
        </div>
        <div className="CardF">
          <h1>Consciência Mental no Contexto da Migração</h1>
          <p>Abordar os desafios psicológicos enfrentados pelos migrantes, promovendo a saúde mental e o suporte emocional durante a migração.</p>
        </div>
        <div className="CardF">
          <h1>Desporto com Foco no Futebol</h1>
          <p>Utilizar o desporto, especialmente o futebol, como ferramenta de integração e inclusão social, criando novas oportunidades para migrantes.</p>
        </div>
        <div className="CardF">
          <h1>Inteligência Artificial e Diáspora</h1>
          <p>Explorar como a tecnologia, especialmente a inteligência artificial, pode ser utilizada para conectar e empoderar as diásporas ao redor do mundo.</p>
        </div>
        <div className="CardF">
          <h1>Migração Triangular e Indicadores de Intelectualidade</h1>
          <p>Analisar e implementar modelos de migração temporária e permanente, com foco no desenvolvimento intelectual e intercâmbio de conhecimentos.</p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
