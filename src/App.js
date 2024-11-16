import React, { useState, useEffect } from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import AppointmentReports from './components/AppointmentReports';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  // Load appointments from LocalStorage
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(savedAppointments);
  }, []);

  // Save appointments to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div>
      <h1>Client Appointment Scheduler</h1>
      <AppointmentForm onAddAppointment={addAppointment} />
      <AppointmentList appointments={appointments} />
      <AppointmentReports appointments={appointments} />
    </div>
  );
};

export default App;
