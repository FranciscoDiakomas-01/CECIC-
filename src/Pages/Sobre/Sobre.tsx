import React, { useEffect } from "react";
import "./Sobre.css";
import SobreNós from "../../assets/SobreNós.png";
import Missão from "../../assets/Missão.png";
import Logo2 from "../../assets/logo2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sobre: React.FC = () => {
  const controlsImg1 = useAnimation();
  const controlsText1 = useAnimation();
  const controlsImg2 = useAnimation();
  const controlsText2 = useAnimation();
  const controlsQuemSomos = useAnimation(); // 👈 Controle para a nova seção
  
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: refQuemSomos, inView: inViewQuemSomos } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView1) {
      controlsImg1.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
      controlsText1.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } });
    } else {
      controlsImg1.start({ x: "-100%", opacity: 0 });
      controlsText1.start({ x: "100%", opacity: 0 });
    }
  }, [inView1, controlsImg1, controlsText1]);

  useEffect(() => {
    if (inView2) {
      controlsImg2.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
      controlsText2.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } });
    } else {
      controlsImg2.start({ x: "100%", opacity: 0 });
      controlsText2.start({ x: "-100%", opacity: 0 });
    }
  }, [inView2, controlsImg2, controlsText2]);

  // Animação da seção "Quem Somos" (movendo de baixo para cima)
  useEffect(() => {
    if (inViewQuemSomos) {
      controlsQuemSomos.start({ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
    } else {
      controlsQuemSomos.start({ y: 50, opacity: 0 });
    }
  }, [inViewQuemSomos, controlsQuemSomos]);

  return (
    <div className="sobre-nos-containerS">
      {/* Seção Sobre Nós */}
      <section className="sobre-nosS" ref={ref1}>
        <motion.img src={SobreNós} alt="Sobre nós" className="imagemS" animate={controlsImg1} />
        <motion.div className="textoS" animate={controlsText1}>
          <p>
            No cenário global atual, onde os desafios internacionais exigem respostas urgentes e integradas, o CECCIC se posiciona como um ator chave na implementação da estratégia "Decade of Compressed Dialogue and Solutions". Com uma abordagem inclusiva e colaborativa, nossa missão é fomentar parcerias com organizações internacionais de renome, como a OIM, OIT, CPLP, CEDEAO, SADC, UA, ONU e FIFA, visando soluções sustentáveis para questões globais prementes.
          </p>
        </motion.div>
      </section>

      {/* Seção Missão */}
      <section className="missaoS" ref={ref2}>
        <motion.div className="textoS1" animate={controlsText2}>
          <p>
            A missão que nos orienta é dedicada à promoção e coordenação da investigação científica nos domínios dos Estudos e da Pesquisa Participativa, tanto de forma quantitativa quanto qualitativa. Buscamos constantemente a excelência, incentivando abordagens inovadoras e colaborativas que enriqueçam nosso entendimento do mundo. Comprometidos com a qualidade e relevância, perseguimos uma jornada de descoberta que contribua significativamente para o avanço do conhecimento em todas as suas formas.
          </p>
        </motion.div>
        <motion.img src={Missão} alt="Missão" className="imagemS" animate={controlsImg2} />
      </section>

      {/* Seção Quem somos */}
      <motion.section className="quem-somosS" ref={refQuemSomos} animate={controlsQuemSomos}>
        <div className="texto-container">
          <h2>Quem Somos</h2>
          <p>
            Somos uma entidade académica de carácter permanente, que define como a sua tarefa, o foco no crescimento do quadro científico, através da comunicação, pesquisa e cooperação inter-institucional, de natureza multidisciplinar e interdisciplinar.
          </p>
        </div>
        <div className="imagem-container">
          <img src={Logo2} alt="Logo" className="ImgS" />
        </div>
      </motion.section>
    </div>
  );
};

export default Sobre;
