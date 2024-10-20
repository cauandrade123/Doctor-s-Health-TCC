import { Link, Navigate, useNavigate } from "react-router-dom";
import './login.scss';
import Loginimg from '../../assets/img/tcc/tccassests/paginas/Login.svg';
import logo from '../../assets/img/tcc/tccassests/logo/logomedica.svg'
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [senha, setSenha] = useState(false); // Controle de mostrar ou esconder a senha
    const [senhalg, setSenhalg] = useState(''); // Valor da senha digitada
    const [email, setEmail] = useState(''); // Valor do email digitado
    const [conteudo, setConteudo] = useState(''); // Mensagens de erro ou sucesso
    const navigate = useNavigate(); // Inicialize o useNavigate

    // Função para alternar entre mostrar ou esconder a senha
    const mostrar = () => setSenha(!senha);

    const Verificar = async () => {
      
       
        
       

        try {
            
            const response = await axios.post('http://localhost:5020/login', {
                email: email,
                senha: senhalg,
            });

           
            const { token } = response.data;
           console.log(token);

           
            if (token) {
                localStorage.setItem('token', token); 
               navigate('/adm')
            }
        } catch (error) {
           
            if (error.response && error.response.status === 401) {
                setConteudo('Email ou senha incorretos.');
            } else {
                alert(error)
                setConteudo('Erro ao realizar o login.');
            }
        }
    };

    return (
        <div className="login-page">
            
            <main> {/* onde está o background */}
                <div className="borda-azul"> {/* metade azul do site, armazena os inputs e o botão */}
                    <div className="opcoes"> {/* armazena os inputs */}
                        <h1>Login</h1>

                        <div className="input-style">
                            <h4>Digite seu email</h4>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                required
                            />
                        </div>

                        <div className="input-style">
                            <h4>Digite sua senha</h4>
                            <input 
                                value={senhalg} 
                                onChange={e => setSenhalg(e.target.value)} 
                                type={senha ? "text" : "password"} 
                                required
                            />
                            <div className="mostrar-erro">
                                <button className="mostrar" onClick={mostrar}>
                                    {senha ? 'Esconder senha' : 'Mostrar senha'}
                                </button>
                                <p className="erro">{conteudo}</p> 
                            </div>
                        </div>
                        <button onClick={Verificar} className="entrar">Entrar</button>
                        <div className="voltar-all"> 
                            <h3>Voltar para a página inicial?</h3>
                            <Link className="voltar" to='/'>Voltar</Link> 
                        </div>
                    </div>

                    <img className="logo" src={logo} alt="Logo" /> 
                </div>
            </main>
        </div>
    );
}
