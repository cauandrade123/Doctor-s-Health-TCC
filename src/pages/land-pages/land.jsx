import Header from "../../components/header/header";
import NewDoutor from '../../assets/img/tcc/tccassests/NovoAssets/dr-img/newDoutor.svg';
import { Link } from "react-router-dom";
import FotoSobreNos2 from '../../assets/img/tcc/tccassests/NovoAssets/new-assets/fotoneta2.svg';
import './land.scss';
import ChamarChat from "../../components/teste_boy";

export default function Land() {
    return (
        <main className="principal-landing-page">
            <div className="secao1">
                <div className="header">
                    <Header />
                </div>

                <div className="content">
                    <div className="texto-titulo">
                        <h1>Doctor's Health</h1>
                        <p>Clinica fundada pelo Dr. João Silva, prezando pela sua saúde e bem-estar.</p>
                        <Link to={'/auto_cadastro'}>
                            <button>Agendar Consulta</button>
                        </Link>
                    </div>
                    <div className="img-doutor">
                        <img src={NewDoutor} alt="" />
                    </div>
                </div>
            </div>
            <div className="faixa-azul">
                <li>Saúde</li>
                <li>Qualidade</li>
                <li>Segurança</li>
                <li>Privacidade</li>
                <li>Excelência</li>
            </div>
            <div className="sobreNos">
                <div className="box-cinza">
                    <div className="box-branca">
                        <div className="cabecalho">
                            <h3>Sobre Nós</h3>
                        </div>
                        <div className="content-sobre-nos">
                            <div className="textos">
                                <h1>Na Doctors Health,<br /> a sua saúde é nossa prioridade <br /> absoluta!</h1>
                                <p>Como uma referência global em cuidados médicos, oferecemos atendimento de excelência com uma equipe de especialistas renomados e tecnologia de ponta. Cada paciente recebe acompanhamento personalizado, garantindo uma experiência que supera expectativas. Escolha a Doctors Health, onde sua saúde é administrada por líderes em medicina, comprometidos com seu bem-estar e qualidade de vida.</p>
                            </div>
                            <div className="images">
                                <img alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="box-transparente">
                        <div className="image">
                            <img src={FotoSobreNos2} alt="" />
                        </div>
                        <div className="textos-box-cinza">
                            <h2>Como Trabalhamos</h2>
                            <h1>Marcar uma consulta <br /> é fácil como 1, 2, 3...</h1>
                            <li>se cadastre, é super fácil!</li>
                            <li>escolha o melhor horário pra você...</li>
                            <li>Pronto! sua consulta está agendada!</li>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nova div para o botão de chamar o chat no canto inferior direito */}
            <div className="chamar-chat-container">
                <ChamarChat />
            </div>
        </main>
    );
}
