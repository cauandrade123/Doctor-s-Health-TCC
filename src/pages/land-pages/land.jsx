  import Header from "../../components/header/header";
  import NewDoutor from '../../assets/img/tcc/tccassests/NovoAssets/dr-img/newDoutor.svg'
  import { Link } from "react-router-dom";
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




 // let card_conheca = [
  //  {
    //  'texto_1': 'Consultório licensiado para medicamento sobre restrição ',
    ///  'img_1': IconRemedio,
    //  'texto_2': 'Os Melhores preços da região',
   //   'img_2': dinheiro_card,
  ///    'texto_3': 'Melhor atendimento para sua saúde',
  ///    'img_3': saude_card,

  
  //  }


 // ]



    
    
    

    return(
        <main className="main-land">
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
        </main>
    )

  }







