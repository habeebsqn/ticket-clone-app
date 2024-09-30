type myEvent = {
  title: string;
  date: string;
  location: string;
  tickets: number;
  img: any;
};

type EventFilterResult = {
  pastEvents: myEvent[];
  upcomingEvents: myEvent[];
  totalPastEvents: number;
  totalUpcomingEvents: number;
};

const filterEvents = (events: myEvent[]): EventFilterResult => {
  const now = new Date().getTime();

  // Filter past events
  const pastEvents = events.filter(
    (event) => new Date(event.date).getTime() < now
  );

  // Filter upcoming events
  const upcomingEvents = events.filter(
    (event) => new Date(event.date).getTime() >= now
  );

  return {
    pastEvents,
    upcomingEvents,
    totalPastEvents: pastEvents.length,
    totalUpcomingEvents: upcomingEvents.length,
  };
};

export default filterEvents;
