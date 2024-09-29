import { useState } from 'react'
import './index.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from 'axios';
import { setMinutes } from 'react-datepicker/dist/date_utils';







export default function CardAgenda(){



    const[consultarAgenda, setConsultarAgenda] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const[lista, setLista] = useState('')

    function handleDateChange (date) {
        setStartDate(date); // Atualiza o estado com a nova data
        console.log("Data selecionada:", date); 
      };

      function pegarcalendario (){
        let url  = 'http://localhost:5020/listar/horarios'

        let resp =  axios.get(url, startDate)   // criar componente que renderiza quando a função é chamada

        setLista(resp.data)  
      }

    return(
        <div className="pagina-agenda">
            <div className="content">
                <input className='Buscar' type="text" placeholder={`🔎 Consultar`}/>
                
          
                <DatePicker    
                    selected={startDate} // pega os valores desse input calendario
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    inline
                    className="blue-calendar"  
                />

                <button onClick={pegarcalendario}>buscar consultas</button>

             
            </div>
        </div>
    )
    

}

function listarDatas(){
    return
}