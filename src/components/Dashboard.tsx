import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import AdminDashboard from './dashboards/AdminDashboard';
import MentorDashboard from './dashboards/MentorDashboard';
import StudentDashboard from './dashboards/StudentDashboard';

const Dashboard: React.FC = () => {
  const { user } = useContext(UserContext);

  if (!user) return null;

  switch (user.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'mentor':
      return <MentorDashboard />;
    case 'student':
      return <StudentDashboard />;
    default:
      return <div>Invalid user role</div>;
  }
};

export default Dashboard;