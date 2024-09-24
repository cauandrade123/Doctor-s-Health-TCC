import './index.scss'
import IconRemedio from '../../assets/img/tcc/tccassests/cards/remedio card.svg'



import './index.scss'



export default function Cards({texto_h2, img }){
    return(
            <div className="container">
                <div className="box-pequena">
                    <div className="title">
                        <h4>Doctor's Health</h4>
                    </div>
                    <div className="content">
                        <h1>O melhor serviço á oferecer.</h1>
                    </div>
                </div>
                <div className="box-grande">
                    <div className="content-da-grande">    
                        <div className="remedioIcon">
                            <img src={img} alt="" />
                        </div>
                        <h2>{texto_h2}</h2>
                        <button> l</button>
                    </div>    
                </div>
            </div>
    );
}
