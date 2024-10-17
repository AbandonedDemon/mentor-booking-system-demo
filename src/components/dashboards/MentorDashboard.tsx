import React from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import LogoutButton from '../LogoutButton';

const MentorDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Mentor Dashboard</h1>
          <LogoutButton />
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <DashboardCard icon={<Calendar />} title="Schedule" description="Manage your availability" />
              <DashboardCard icon={<Clock />} title="Upcoming Sessions" description="View your upcoming mentoring sessions" />
              <DashboardCard icon={<Users />} title="Student Groups" description="View assigned student groups" />
              <DashboardCard icon={<MessageSquare />} title="Feedback" description="Provide feedback to students" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 text-indigo-500">{icon}</div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="mt-1 text-sm text-gray-900">{description}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;