import axios from "axios";
import { useState } from "react";

export default function Chat() {

    const [mensagem, setMensagem] = useState('')
    const [resposta, setResposta] = useState([])

    const mostrasmsg = async () => {
        if (mensagem == null) {
            return;
        }

        setResposta([...resposta, { text: mensagem, sender: 'user' }])

        const respotadobot = await axios.get(`https://api.wit.ai/message`, {
            params: {
                v: '20241016',
                q: mensagem,
            },
            headers: {
                Authorization: `Bearer VAF3FY436CTT5YRF6L57VEZUOLDRKTSM`,
            },
        });


        let resp = respotadobot.data

        const bot = resp.intents[0]?.name||'nao compreendo'

        setResposta((prevResposta) => [...prevResposta, {text: bot, sender: "bot"}])
        setMensagem('')
    }


    return (
        <main>
                        <div>
                <ul>
                    {resposta.map((msg, index) => (
                        <li key={index} className={msg.sender}>
                            <strong>{msg.sender === 'user' ? 'Você' : 'Aquino'}:</strong> {msg.text}
                        </li>
                    ))}
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

