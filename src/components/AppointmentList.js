import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      <h2>Scheduled Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled</p>
      ) : (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <strong>{appointment.clientName}</strong> ({appointment.clientEmail}) <br />
              Date: {appointment.appointmentDate}, Time: {appointment.appointmentTime}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;
