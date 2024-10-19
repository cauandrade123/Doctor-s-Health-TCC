import Header from "../../components/header/header";
  import NewDoutor from '../../assets/img/tcc/tccassests/NovoAssets/dr-img/newDoutor.svg'
  import { Link } from "react-router-dom";
  import FotoSobreNos from '../../assets/img/tcc/tccassests/NovoAssets/new-assets/image-voeneto.svg'
  import FotoSobreNos2 from '../../assets/img/tcc/tccassests/NovoAssets/new-assets/fotoneta2.svg'
  import './land.scss'
 




  // components a serem usados na reforma

//   {card_conheca.map((item,index) => 
//     <Cards
//       key={index}
//       texto_1={item.texto_1}
//       img_1={ item.img_1}
//       texto_2={ item.texto_2}
//       img_2={item.img_2}
//       texto_3={item.texto_3}
//       img_3={item.img_3}

    
//     /> 
  
// )}


// <Footer/> 


// let card_conheca = [

//   {
//     'texto_1': 'Consultório licensiado para medicamento sobre restrição ',
//     'img_1': IconRemedio,
//     'texto_2': 'Os Melhores preços da região',
//     'img_2': dinheiro_card,
//     'texto_3': 'Melhor atendimento para sua saúde',
//     'img_3': saude_card,


//   }


// ]



  export default function Land() {

    return(
        <main className="main-principal">
            <div className="secao1">
                <div className="header">
                    <Header />
                </div>
                <div className="content">
                    <div className="texto-titulo">
                          <h1>Doctor's Health</h1>
                          <p>Clinica fundada pelo Dr. João Silva, prezando pela sua saúde e bem-estar.</p>
                          <Link to={'/auto_cadastro'}><button>Agendar Consulta</button></Link>
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
              </div>
            </div>
        </main>
    )

  }