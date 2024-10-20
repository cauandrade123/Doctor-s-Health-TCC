import './footer.scss'
import NewLogo from '../../assets/img/tcc/tccassests/NovoAssets/new-logo/newlogo.svg'
import { Link } from 'react-router-dom'
import InstaWhite from '../../assets/img/tcc/tccassests/simbolos/InstaWhite.svg'


export default function Footer() {

    return (

        <div className="container-footer">

            <div className="container-logo-loc">
                <img src={NewLogo} alt="" />
                <div className="loc">
                    <p><strong>Localização</strong></p>
                    <p>Rua Astolfo Vila, 389</p>

                </div>
            </div>

            <div className="container-linha"> <hr /></div>

            <div className="container-infos">

                <p>@2024 Doctor's Health +</p>
                <p>Desenvolvido pelo time <strong>InfoDevs</strong></p>
                <div className="insta1">
                    <img src={InstaWhite} alt="" />
                    <p>@DrJoãoSilva_oficial</p>
                </div>

            </div>

            <div className="botao-adm">
                <Link to={'/login'}>
                    
                    <button>Admin</button>
                    
                </Link>
            </div>

        </div>

    )
}