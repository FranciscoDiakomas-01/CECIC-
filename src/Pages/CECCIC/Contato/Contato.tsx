
import "./Contato.css";
import "../../CECCIC/animations.css";

const Contato = () => {
    return (
        <div className="contato-container">
            <div className="contato-header animate-slide-up">
                <h1>Entre em Contato</h1>
                <p>Estamos aqui para ajudar</p>
            </div>

            <div className="contato-content">
                <div className="contato-info animate-slide-left delay-1">
                    <h2>Informações de Contato</h2>
                    <div className="info-item animate-fade-in delay-2">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Endereço: Rua Exemplo, 123 - Lisboa, Portugal</p>
                    </div>
                    <div className="info-item animate-fade-in delay-3">
                        <i className="fas fa-phone"></i>
                        <p>Telefone: +351 123 456 789</p>
                    </div>
                    <div className="info-item animate-fade-in delay-4">
                        <i className="fas fa-envelope"></i>
                        <p>Email: contato@ceccic.com</p>
                    </div>
                </div>

                <div className="contato-form animate-slide-right delay-1">
                    <h2>Envie sua Mensagem</h2>
                    <form className="animate-fade-in delay-2">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" required></textarea>
                        </div>
                        <button type="submit" className="btn-submit animate-scale delay-3">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contato; 