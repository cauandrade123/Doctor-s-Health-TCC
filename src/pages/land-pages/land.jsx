import Header from "../../components/header/header";
  import NewDoutor from '../../assets/img/tcc/tccassests/NovoAssets/dr-img/newDoutor.svg'
  import { Link } from "react-router-dom";
  import FotoSobreNos from '../../assets/img/tcc/tccassests/NovoAssets/new-assets/imgvoeneto1.svg'
  import FotoSobreNos2 from '../../assets/img/tcc/tccassests/NovoAssets/new-assets/fotoneta2.svg'
  import EnfermeiraCuidando from '../../assets/img/tcc/tccassests/land pages/enfermeira-cuidando-idosa.svg'
  import SaudeCard from '../../assets/img/tcc/tccassests/cards/saude_card.svg'
  import DinheiroCard from '../../assets/img/tcc/tccassests/cards/dinheiro card.svg'
  import RemedioCard from '../../assets/img/tcc/tccassests/cards/remedio card.svg'
  import './land.scss'
  import Cards from "../../components/cards";
  import Footer from '../../components/footer/footer'
  import ChamarChat from '../../components/teste_boy/index'
  








  export default function Land() {



    let card_conheca = [

        {
          'texto_1': 'Consultório licensiado para medicamento sobre restrição ',
          'img_1': RemedioCard,
          'texto_2': 'Os Melhores preços da região',
          'img_2': DinheiroCard,
          'texto_3': 'Melhor atendimento para sua saúde',
          'img_3': SaudeCard,
     
       }
     
     
      ]




    return(
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
                    <div id="Sobrenos" className="box-branca">
                        <div  className="cabecalho">
                            <h3>Sobre Nós</h3>
                        </div>
                        <div  className="content-sobre-nos">

                            <div className="textos">
                                <h1>Na Doctors Health,<br /> a sua saúde é nossa prioridade <br /> absoluta! </h1>

                                <p>Como uma referência global em cuidados médicos, oferecemos atendimento de excelência com uma equipe de especialistas renomados e tecnologia de ponta. Cada paciente recebe acompanhamento personalizado, garantindo uma experiência que supera expectativas. Escolha a Doctors Health, onde sua saúde é administrada por líderes em medicina, comprometidos com seu bem-estar e qualidade de vida.</p>
                            </div>
                            <div className="images">
                                <img src={FotoSobreNos} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="box-transparente">
                        <div className="image">
                                <img src={FotoSobreNos2} alt="" />
                        </div>
                        <div className="textos-box-cinza">

                                <h2>Como Trabalhamos</h2>

                                <h1>Marcar uma consulta <br /> é facil como 1, 2, 3...</h1>

                                <li>se cadastre, é super fácil!</li>
                                <li>escolha o melhor horário pra você...</li>
                                <li>Pronto! sua consulta está agendada!</li>
                        </div>
                    </div>
                    <div id="ComoTrabalhamos" className="box-branca2">
                        <div className="textos-box-branca2">
                            <h3>Suporte</h3>

                            <h1>Estamos Aqui Para Te Ajudar!</h1>

                            <p>Na Doctors Health, o suporte ao cliente é uma prioridade. Nossa equipe de profissionais dedicados está disponível para atender às suas necessidades, garantindo que você tenha uma experiência tranquila e satisfatória. Oferecemos diversos canais de atendimento, incluindo telefone, e-mail e chat ao vivo, para que você possa escolher a forma que melhor se adapta à sua rotina.</p>

                            <button>Contate-nos</button>
                        </div>
                        <div className="image-box-branca2">
                             <img src={EnfermeiraCuidando} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="Serviços" className="Card-Servicos">
                {card_conheca.map((item,index) => 
                        <Cards
                            key={index}
                            texto_1={item.texto_1}
                            img_1={ item.img_1}
                            texto_2={ item.texto_2}
                            img_2={item.img_2}
                            texto_3={item.texto_3}
                            img_3={item.img_3}
                        />  
                )}
            </div>
                
            <div className="chamar-chat-container">
                <ChamarChat/>
            </div>
            
                        <Footer />
        </main>
    );
}
