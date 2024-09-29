import { useState } from 'react';
import './index.scss';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from 'axios';

export default function CardAgenda() {
    const [startDate, setStartDate] = useState(new Date());
    const [lista, setLista] = useState([]);

    // Função que atualiza a data selecionada
    function handleDateChange(date) {
        setStartDate(date); 
        console.log("Data selecionada:", date);
    }

    // Função para pegar os horários da API
    async function pegarcalendario() {
        try {
            const formattedDate = startDate.toISOString().split('T')[0]; // Formata a data para yyyy-MM-dd
            const url = `http://localhost:5020/listar/horarios?data=${formattedDate}`; // Passa a data como query string

            const resp = await axios.get(url); // Aguarda a resposta da API
            setLista(resp.data.consulta || []); // Garante que 'lista' será um array
        } catch (error) {
            console.error("Erro ao buscar os horários:", error);
            setLista([]); // Se houver erro, define lista como vazio
        }
    }

    return (
        <div className="pagina-agenda">
            <div className="content">
                <input className='Buscar' type="text" placeholder={`🔎 Consultar`} />

                <DatePicker
                    selected={startDate} // Pega os valores desse input calendário
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    inline
                    className="blue-calendar"
                />

                <button onClick={pegarcalendario}>Buscar Consultas</button>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista && lista.length > 0 ? (
                            lista.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    {/* Exibir apenas a data */}
                                    <td>{new Date(item.dia_horario).toLocaleDateString()}</td>
                                    {/* Exibir apenas o horário */}
                                    <td>{new Date(item.dia_horario).toLocaleTimeString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">Nenhuma consulta encontrada</td>
                            </tr>
                        )}
                    </tbody>

         
                </table>
            </div>
        </div>
    );
}
