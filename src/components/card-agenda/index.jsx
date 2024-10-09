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
      <div style={{ height: '550px', width: '57vw',  marginLeft:  '80px', marginTop: '-12 0px'  }}>
        <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ margin: '50px' }}
              messages={{
              today: 'Hoje',
              previous: 'Voltar',
              next: 'Próximo',
              month: 'Mês',
              week: 'Semana',
              day: 'Dia',
              agenda: 'Agenda',
              date: 'Data',
              time: 'Hora',
              event: 'Evento',
          }}
        />
      </div>
    </main>  
  );
};

<<<<<<< HEAD
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const myEventsList = [
  {
    title: 'Reunião',
    allDay: true,
    start: new Date(2024, 9, 1),
    end: new Date(2024, 9, 1),
  },
  {
    title: 'Projeto',
    start: new Date(2024, 9, 7, 10, 0),
    end: new Date(2024, 9, 7, 12, 0),
  },
];

export default function CardAgenda() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day', 'agenda']}
        defaultView="month"
        style={{ height: 500, margin: '50px', boxShadow: '10px 10px 10px black' }}
      />
    </div>
  );
}



=======
>>>>>>> b509d69cfd151ba4e7529640a3a2fa245317aa45
