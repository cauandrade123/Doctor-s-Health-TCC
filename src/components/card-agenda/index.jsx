import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
}



