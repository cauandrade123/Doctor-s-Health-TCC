import { useState } from 'react'
import './index.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";








export default function CardAgenda(){



    const[consultarAgenda, setConsultarAgenda] = useState('')
    const [startDate, setStartDate] = useState(new Date());


    function handleDateChange (date) {
        setStartDate(date); // Atualiza o estado com a nova data
        console.log("Data selecionada:", date); // Exibe a data no console
      };

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

             
            </div>
        </div>
    )
}