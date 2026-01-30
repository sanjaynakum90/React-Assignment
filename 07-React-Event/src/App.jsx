import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Components/Header';
import EventList from './Components/EventList';
import EventModal from './Components/EventModal';
import {EventData} from "../EventData"

function App() {
  const [events, setEvents] = useState(EventData);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRegister = (id) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, attendees: e.attendees + 1 } : e));
  };

  const handleDelete = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
    setShowModal(false);
  };

  return (
    <div className="app-container">
      <Header />

      <EventList
        events={events}
        onView={(e) => { setSelectedEvent(e); setShowModal(true); }}
        onRegister={handleRegister}
      />

      <EventModal
        show={showModal}
        event={selectedEvent}
        onClose={() => setShowModal(false)}
        onRegister={handleRegister}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;