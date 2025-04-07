import React from "react";
import "./Palestras.css"
import Logo from "../../assets/Logo3.png"
import Sauré_Baldé from "../../assets/Sauré Baldé.jpg"
import PhD_Jean_Karim_Coly from "../../assets/PhD.Jean Karim Coly.jpg"
import Ph_D_João_Salm from "../../assets/Ph-D. João Salm.jpg"
import Patricia_Lobo from "../../assets/Patricia Lobo.jpg"
import João_Kanda from "../../assets/João Kanda.jpg"
import Janealle_Neri from "../../assets/Janealle  Neri.jpg"
import Eng_Horacio_Pina_Prata from "../../assets/Eng.Horacio Pina Prata.jpg"
import Dra_Alice_dos_Anjos from "../../assets/Dra.Alice dos Anjos.jpg"
import Dra_Catarina_Munguambe from "../../assets/Dra. Catarina Munguambe.jpg"
import Barbara_Andrade from "../../assets/Barbara Andrade.jpg"
import Sr_Jefferson_Olivereira from "../../assets/Sr. Jefferson Olivereira.jpg"
import Comendador_José_Ferreira from "../../assets/Comendador José Ferreira Morais.jpg"
import Kairo_da_Silva_Souza from "../../assets/Kairo da Silva.jpg"

const Palestras: React.FC = () => {
  return (
    <div className="ContainerP">
      <header className="HeaderP">
        <h1>Palestrantes</h1>
        <img src={Logo} alt="Logo" className="ImgP" />
      </header>
      <section className="sectionP">
        <div className="CardP">
          <img src={PhD_Jean_Karim_Coly } alt="FOTO" className="ImagP" />
          <h1>Ph-D. Jean Karim Coly</h1>
          <p>
            Investigador Sénior e Diretor do Gabinete do Direito Ecnómico e Desenvolvimento Social do CECCIC</p>
        </div>
        <div className="CardP">
          <img src={Eng_Horacio_Pina_Prata } alt="FOTO" className="ImagP" />
          <h1>Eng. Horácio Pina Prata</h1>
          <p>CEO da Conclusão- Estudos e Formação. Licenciado  em Engenharia Civil, com Especialização em Hidráulica Aplicada.</p>
        </div>
        <div className="CardP">
          <img src={Barbara_Andrade} alt="FOTO" className="ImagP" />
          <h1>Bárbara Andrade, </h1>
          <p>Investigadora Sénior do CECCIC, Psicologa da Formação e Pós Graduada em Saúde Mental e Desenvolvimento Humano CEO da Navegantes Brasil</p>
        </div>
        <div className="CardP">
          <img src={Ph_D_João_Salm } alt="FOTO" className="ImagP" />
          <h1>Ph-D. João Salm</h1>
          <p>Conselheiro Científico do CECCIC, Professor associado de Justiça Criminal em Governors State University (GSU), Chicago Ilinois nos EUA</p>
        </div>
        <div className="CardP">
          <img src={Sauré_Baldé} alt="FOTO" className="ImagP" />
          <h1>Suaré BALDÉ</h1>
          <p>Escritor, Pesquisador, e Especialista em Políticas Públicas e Boa Governança, Expert nos Projectos do Desenvolvimento e CEO do CECCIC.</p>
        </div>
        <div className="CardP">
          <img src={Dra_Alice_dos_Anjos } alt="FOTO" className="ImagP" />
          <h1>Dra. Alice dos Anjos,</h1>
          <p>Psicóloga da Formação e Responsável do Centro da Formação Técnico Profissional</p>
        </div>
        <div className="CardP">
          <img src={Janealle_Neri} alt="FOTO" className="ImagP" />
          <h1>Janaelle Neri, </h1>
          <p>A brasileira quilombola que coordena o I Seminário de Empreendimentos de Impacto Social em Países de Língua Portuguesa..</p>
        </div>
        <div className="CardP">
          <img src={João_Kanda} alt="FOTO" className="ImagP" />
          <h1>João Kanda Bernardo </h1>
          <p>João Kanda Bernardo Deputado da Assembleia Nacional Angolana</p>
        </div>
        <div className="CardP">
          <img src={Patricia_Lobo} alt="FOTO" className="ImagP" />
          <h1>Patricia_Lobo </h1>
          <p>Figura, Femenina mais influente da CPLP e da américa latina.</p>
        </div>
        <div className="CardP">
          <img src={Dra_Catarina_Munguambe} alt="FOTO" className="ImagP" />
          <h1>Dra. Catarina Munguambe</h1>
          <p>Investigadora do Centro de Estudos de Assuntos de Género CECAGE da Universidade Eduardo Mondlane-Maputo Moçambique</p>
        </div>
        <div className="CardP">
          <img src={Sr_Jefferson_Olivereira} alt="FOTO" className="ImagP" />
          <h1>Sr_Jefferson_Olivereira</h1>
          <p>Investigador do CECCIC e Analista de Marketing Digital,  Tecnologia Voltada a Cripto Moedas e Mercado Financeiro</p>
        </div>
        <div className="CardP">
          <img src={Comendador_José_Ferreira} alt="FOTO" className="ImagP" />
          <h1>Comendador José Ferreira Morais</h1>
          <p>Matemático, Jornalista, Bancário e Conselheiro Económico para América Latina e África Central do CEO de CECCIC</p>
        </div>
        <div className="CardP">
          <img src={Kairo_da_Silva_Souza} alt="FOTO" className="ImagP" />
          <h1>Kairo da Silva Souza</h1>
          <p>Investigador e Membro da Coordenação do CECCIC BRASIL-DF BRASÍLIA</p>
        </div>
      </section>
    </div>
  );
};

export default Palestras;