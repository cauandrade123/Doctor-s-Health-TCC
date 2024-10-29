import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/tcc/tccassests/logo/newlogo.svg'
import NotFound from '../../assets/img/tcc/tccassests/simbolos/NotFound.svg'
export default function Page404() {


    return(
        <div className="main404">

            <div className="btInicio">
             <Link className='btVoltar' to={'/'}>Inicio</Link>
            </div>
            
            <div className="container-box">

                <div className="container-box-imgs">

                    <img className='imagem404' src={NotFound} alt="" />

                    <img  className='logo' src={Logo} alt="" />

                </div>

            </div>


        </div>
    )
}