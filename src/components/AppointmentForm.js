import React, { useState } from 'react';

const AppointmentForm = ({ onAddAppointment }) => {
  const [appointment, setAppointment] = useState({
    clientName: '',
    clientEmail: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appointment.clientName || !appointment.clientEmail || !appointment.appointmentDate || !appointment.appointmentTime) return;
    
    // Simulate sending a confirmation (here we just log it)
    console.log(`Confirmation sent to ${appointment.clientEmail}`);
    
    onAddAppointment(appointment);
    setAppointment({
      clientName: '',
      clientEmail: '',
      appointmentDate: '',
      appointmentTime: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="clientName"
        placeholder="Client Name"
        value={appointment.clientName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="clientEmail"
        placeholder="Client Email"
        value={appointment.clientEmail}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="appointmentDate"
        value={appointment.appointmentDate}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="appointmentTime"
        value={appointment.appointmentTime}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
