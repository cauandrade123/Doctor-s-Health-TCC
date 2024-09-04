import './index.scss'
import IconRemedio from '../../assets/img/tcc/tccassests/cards/remedio card.svg'



export default function Cards(){
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
                    <div className="remedioIcon">
                        <img src={IconRemedio} alt="" />
                    </div>
                    <h2>Consultório licenciado para medicamentos sobre restrição</h2>
                </div>
            </div>
    );
}