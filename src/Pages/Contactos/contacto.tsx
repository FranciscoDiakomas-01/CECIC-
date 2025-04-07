import "./contacto.css";
import { Mail, MapPin, Phone } from "lucide-react";

const Contacto = () => {
  return (
    <div className="ContainerCO">
      <div className="ContenteCo">
        <h1>Informações de contacto</h1>
        <div className="contact-item">
          <MapPin size={20} color="white" />
          <p>Rua de Vénus Nº 1 3º DTO 2635-581 RIO DE MOURO SERRA DAS MINAS</p>
        </div>
        <div className="contact-item">
          <Mail size={20} color="white" />
          <p>Geral@ceccic.com</p>
        </div>
        <div className="contact-item">
          <Phone size={20} color="white" />
          <p>+55 61 8151-2794</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
