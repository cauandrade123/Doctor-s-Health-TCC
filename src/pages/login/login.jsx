import { Link, Navigate } from "react-router-dom";
import './login.scss';
import Loginimg from '../../assets/img/tcc/tccassests/paginas/Login.svg';
import logo from '../../assets/img/tcc/tccassests/logo/logomedica.svg'
import { useState } from "react";


export default function Login() {

    const [senha, setSenha] = useState(false)
    const [senhalg, setSenhalg] = useState('')
    const [email, setEmail] = useState('')
    const [verficado, setVerficado] = useState(false)
    const [conteudo, setConteudo] = useState('')

    const mostrar = () => setSenha(!senha)

    function Verify(){

        if (email === 'adm@gmail.com' && senhalg === 'senha1234')  {
           setVerficado(true)
        } else {
            setConteudo('Email ou senha incorretos.')
        }
    }

    if(verficado === true) {
        return <Navigate to={'/ADM'}/>
    }
    return (
        <div className="login-page">
            <main> {/*onde ta o background*/}

           
                    <div className="borda-azul">  {/*metade azul do site, armazena os input e botao*/}
                        <div className="opcoes">  {/*armazena os input*/}

                            <h1>Login</h1>

                            <div className="input-style">
                            <h4>Digite seu email</h4>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div className="input-style">
                            <h4>Digite sua senha</h4>
                            <input value={senhalg} onChange={e => setSenhalg(e.target.value)} type={senha ? "text" : "password"} />
                            <div className="mostrar-erro">
                            <button className="mostrar" onClick={mostrar}>Mostrar senha</button>
                            <p className="erro">{conteudo}</p>
                            </div>
                         
                            </div>
                            <button onClick={Verify} className="entrar">Entrar</button>
                        

                            <div className="voltar-all">  {/*armazena o texto e botão para voltar a pagina inicial*/}

                                <h3>Voltar para a página inicial?</h3>
                                
                            <Link className="voltar" to='/'>Voltar</Link>
                            </div>
                        </div>

                        
                        <img className="logo" src={logo} alt="" />
                     
                    </div>

                   
            </main>
        </div>
    );
}
