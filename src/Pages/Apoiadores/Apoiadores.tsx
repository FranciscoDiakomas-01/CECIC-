import "./Apoiadores.css";
import Logo from "../../assets/Logo.png";

// Importando as imagens dos colaboradores
import concluao from "../../assets/Conclusão.jpg"
import Jovem_Empreendedor from "../../assets/Jovem_Empreendedor.jpg"
import Milenio from "../../assets/Milénio.jpg"
import govGuineBissau from "../../assets/g-guine-bissau.jpeg";
import inep from "../../assets/inep.jpeg";
import m from "../../assets/M.jpeg";
import belo from "../../assets/belo.jpeg";
import g from "../../assets/g.jpeg";
import tivoli from "../../assets/tivoli.jpeg";

const Apoiadores = () => {
    return (
        <div className="ContainerAPP">
            <h1>Organizador</h1>
            <img src={Logo} alt="Logo do organizador" className="ImagemAPP" />

            <h1>Colaboradores</h1>
            <div className="ColaboradoresGridAPP">
                <img src={concluao} alt="INEP" className="ImagemColaboradorAPP" />
                <img src={govGuineBissau} alt="Governo da Guiné-Bissau" className="ImagemColaboradorAPP" />
                <img src={inep} alt="INEP" className="ImagemColaboradorAPP" />
                <img src={Jovem_Empreendedor} alt="M" className="ImagemColaboradorAPP" />
                <img src={Milenio} alt="M" className="ImagemColaboradorAPP" />
                <img src={m} alt="M" className="ImagemColaboradorAPP" />
                <img src={belo} alt="BELO" className="ImagemColaboradorAPP" />
                <img src={g} alt="G" className="ImagemColaboradorAPP" />
                <img src={tivoli} alt="TIVOLI" className="ImagemColaboradorAPP" />
            </div>
        </div>
    );
};

export default Apoiadores;
