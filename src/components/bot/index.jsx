import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.scss'


export default function Chat() {
    const [mensagem, setMensagem] = useState('');
    const [resposta, setResposta] = useState([]);
    const [carregando, setCarregando] = useState(false); // Estado para controle do carregamento
    const navigate = useNavigate('');

    const mostrasmsg = async () => {
        if (!mensagem.trim()) {
            setResposta((prevResposta) => [
                ...prevResposta,
                { text: 'Por favor, insira uma mensagem válida.', sender: 'bot' }
            ]);
            return;
        }

        setResposta((prevResposta) => [...prevResposta, { text: mensagem, sender: 'user' }]);
        setMensagem("");
        setCarregando(true); // Inicia o carregamento

        const respotadobot = await axios.get(`https://api.wit.ai/message`, {
            params: {
                v: '20241016',
                q: mensagem,
            },
            headers: {
                Authorization: `Bearer VAF3FY436CTT5YRF6L57VEZUOLDRKTSM`,
            },
        });

        let resp = respotadobot.data;

        const saudacao = resp.entities['saudacao:saudacao'] || [];
        const consulta = resp.entities['consulta:consulta'] || [];
        const xingamento = resp.entities['xingamento:xingamento'] || [];
        const cancelar = resp.entities['cancelamento:cancelamentos'] || [];

        const novasRespostas = [];

        if (saudacao.length > 0) {
            novasRespostas.push({ text: 'Olá! Como posso lhe ajudar hoje?', sender: "bot" });
        }
        if (cancelar.length > 0) {
            novasRespostas.push({ text: 'Para cancelar uma consulta, clique no botão abaixo:', sender: "bot" });
        }
        if (consulta.length > 0) {
            novasRespostas.push({ text: 'Para marcar sua consulta, clique no botão abaixo:', sender: "bot" });
            novasRespostas.push({ text: 'Clique aqui', sender: 'button' });
        }
        if (xingamento.length > 0) {
            novasRespostas.push({ text: 'Esse tipo de mensagem não é tolerado.', sender: "bot" });
        }

        setResposta((prevResposta) => [...prevResposta, ...novasRespostas]);
        setCarregando(false); // Finaliza o carregamento
    }

    const navegar = () => {
        navigate('/auto_cadastro');
    }

    return (
        <main className="bot">
            <div className="bot1">
                <ul>
                    {resposta.map((msg, index) => (
                        <li key={index} className={msg.sender}>
                            <strong>{msg.sender === 'user' ? 'Você' : 'Aquino'}:</strong> {msg.text}
                            {msg.sender === 'button' && (
                                <button onClick={navegar}>{msg.text}</button>
                            )}
                        </li>
                    ))}
                    {carregando && <li className="bot"><strong>Aquino:</strong> Estou pensando...</li>} {/* Indicador de carregamento */}
                </ul>

                <input
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"
                />
                <button onClick={mostrasmsg}>Enviar</button>
            </div>
        </main>
    );
}
