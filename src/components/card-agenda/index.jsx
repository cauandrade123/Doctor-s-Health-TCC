import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import axios from 'axios';

const locales = {
  'pt-BR': ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

export default function CardAgenda() {
  const [listadeEventos, setListadeEventos] = useState([]);

  useEffect(() => {
    const pegarData = async () => {
      try {
        const url = 'http://localhost:5020/pegardata';
        const resp = await axios.get(url);
        const dados = resp.data.dia_horario; 

        const eventosTransformados = transformData(dados);

        setListadeEventos(eventosTransformados);
        
      } catch (error) {
        console.error('Erro ao pegar os dados:', error);
      }
    };

    pegarData();
  }, []);

  const transformData = (dados) => {
    return dados.map(item => ({
      title: item.titulo, // Certifique-se de que `titulo` existe em `item`
      start: new Date(item.data_inicio),
      end: new Date(item.data_fim),
    }));
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={listadeEventos}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day', 'agenda']}
        defaultView="month"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
}
