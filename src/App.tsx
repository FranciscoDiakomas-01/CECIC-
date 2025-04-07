import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre/Sobre";
import Apoiadores from "./Pages/Apoiadores/Apoiadores";
import FAQ from "./Pages/FAQ/FAQ";
import Palestras from "./Pages/Palestras/Palestras";
import Contacto from "./Pages/Contactos/contacto";
import HomeB from "./Pages/CECCIC/Home/HomeB";
import About from "./Pages/CECCIC/About/About";
import ContactoB from "./Pages/CECCIC/Contacto/ContactB";
import Programa from "./Pages/CECCIC/Programa/Programa";
import Palestrantes from "./Pages/CECCIC/Palestrantes/Palestrantes";
import Servicos from "./Pages/Servicos/Servicos";
import Footer from './components/Footer/Footer';
import "./index.css";

// Componente de proteção de rota

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Site Principal com Scroll */}
          <Route
            path="/"
            element={
              <div>
                <div id="home">
                  <Home />
                </div>
                <div id="sobre">
                  <Sobre />
                </div>
                <div id="servicos">
                  <Servicos />
                </div>
                <div id="palestras">
                  <Palestras />
                </div>
                <div id="faq">
                  <FAQ />
                </div>
                <div id="apoiadores">
                  <Apoiadores />
                </div>
                <div id="contacto">
                  <Contacto />
                </div>
              </div>
            }
          />
          {/* Site 2 */}
          <Route
            path="/homeb"
            element={
              <div>
                <div id="homeB">
                  <HomeB />
                </div>
                <div id="AboutSection">
                  <About />
                </div>
                <div id="Programa">
                  <Programa />
                </div>
                <div id="Palestrantes">
                  <Palestrantes />
                </div>
                <div id="contactob">
                  <ContactoB />
                </div>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
