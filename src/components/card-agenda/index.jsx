import './index.scss'
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br'; 


const localizer = momentLocalizer(moment);

export default function  MyCalendar  () {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchConsultasFromAPI()
      .then(data => {
        const formattedEvents = data.map(event => {
          
          const startDate = moment(event.dia_horario).toDate();
          const endDate = moment(event.dia_horario).add(1, 'hours').toDate(); 

          return {
            start: startDate,
            end: endDate,
            title: event.title || 'Consulta',
          };
        });

        console.log('Eventos formatados:', formattedEvents);
        setEvents(formattedEvents);
      })
      .catch(error => console.error('Erro ao carregar consultas:', error));
  }, []);

  const fetchConsultasFromAPI = async () => {
    const response = await fetch('http://localhost:5020/pegardata');
    if (!response.ok) {
      throw new Error('Erro ao carregar dados da API');
    }
    const data = await response.json();
    console.log('Dados recebidos:', data);
    return data;
  };

  return (
    <main>
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


