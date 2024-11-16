import React from 'react';

const AppointmentReports = ({ appointments }) => {
  const totalAppointments = appointments.length;

  // Calculate unique clients based on email
  const uniqueClients = new Set(appointments.map((appointment) => appointment.clientEmail));
  const clientRetentionRate = totalAppointments === 0 ? 0 : ((uniqueClients.size / totalAppointments) * 100).toFixed(2);

  return (
    <div>
      <h2>Appointment Reports</h2>
      <p>Total Appointments: {totalAppointments}</p>
      <p>Unique Clients: {uniqueClients.size}</p>
      <p>Client Retention Rate: {clientRetentionRate}%</p>
    </div>
  );
};

export default AppointmentReports;
