import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import FOTO3 from "../../../assets/Captura7.png";
import FOTO4 from "../../../assets/Captura3.png";
import FOTO5 from "../../../assets/Captura4.png";
import FOTO6 from "../../../assets/Captura5.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutSection: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="text">
          <div className="titles">
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>O que esperar?</motion.h1>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>A Cimeira Internacional</motion.h2>
          </div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            A Europa e África, trabalharam num espírito de parceria para encontrar soluções comuns para os desafios de interesse mútuo.
            Junta-se a nós sobre alevanca da potencialidades lusófonas em aprender facilmente o Inglês e Participar na Tomada das Decisões para abertura do Mercado de Emprego para a CPLP).
          </motion.p>
        </div>
        <motion.div className="image" variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
          <img src={FOTO3} alt="imagem" />
        </motion.div>
      </div>
      
      <div className="stats-section">
        <motion.h3 className="ceccic-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>Ceccic</motion.h3>
        <div className="stats-content">
          <div className="stats-text">
            <motion.h2 className="bordered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>11 Palestrantes</motion.h2>
            <motion.h2 className="bordered" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>2x Networking e Indústria</motion.h2>
          </div>
          <motion.div className="image1" variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            <img src={FOTO4} alt="imagem" />
          </motion.div>
        </div>
      </div>

      <div className="stats-section2">
        <motion.h3 className="ceccic-title2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>Ceccic</motion.h3>
        <div className="stats-content2">
          <div className="stats-text2">
            <motion.h2 className="bordered2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>4 Dias de motivação</motion.h2>
          </div>
          <motion.div className="image2" variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            <img src={FOTO5} alt="imagem" />
          </motion.div>
        </div>
      </div>

      <div className="stats-section3">
        <motion.h3 className="ceccic-title3" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>Ceccic</motion.h3>
        <div className="stats-content3">
          <div className="stats-text3">
            <motion.h2 className="bordered3" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>5 Topicos modernos</motion.h2>
          </div>
          <motion.div className="image3" variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            <img src={FOTO6} alt="imagem" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
