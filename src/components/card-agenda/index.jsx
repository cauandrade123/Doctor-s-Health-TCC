import './index.scss';
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br'; 

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchConsultasFromAPI();
        const formattedEvents = data.map((event) => {
          const startDate = moment(event.dia_horario).toDate();
          const endDate = moment(event.dia_horario).add(1, 'hours').toDate();

          return {
            start: startDate,
            end: endDate,
            title: 'Consulta', 
          };
        });

        console.log('Eventos formatados:', formattedEvents);
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Erro ao carregar consultas:', error);
      }
    };

    loadEvents();
  }, []);

  const fetchConsultasFromAPI = async () => {
    let url = `http://localhost:5020/pegardata`;
    let resp = await axios.get(url);
  
    return resp.data;
  };

  return (
    <main className='card-calendario'>
      <div style={{ height: '500px', width: '50vw', marginLeft: '20dvh', backgroundColor: 'transparent' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={{
            today: 'Hoje',
            previous: 'Voltar',
            next: 'Próximo',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            agenda: 'Agenda',
          }}
        />
      </div>
    </main>
  );
};
