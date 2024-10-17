import React, { useState } from 'react';
import { Users, BookOpen, Calendar, Settings } from 'lucide-react';
import LogoutButton from '../LogoutButton';
import UserManagementPage from '../pages/UserManagementPage';

const AdminDashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'userManagement':
        return <UserManagementPage onBack={() => setCurrentPage(null)} />;
      default:
        return (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              icon={<Users />}
              title="User Management"
              description="Manage students and mentors"
              onClick={() => setCurrentPage('userManagement')}
            />
            <DashboardCard
              icon={<BookOpen />}
              title="Group Management"
              description="Manage student groups"
              onClick={() => {/* TODO: Implement group management */}}
            />
            <DashboardCard
              icon={<Calendar />}
              title="Booking Overview"
              description="View and manage bookings"
              onClick={() => {/* TODO: Implement booking overview */}}
            />
            <DashboardCard
              icon={<Settings />}
              title="System Settings"
              description="Configure system parameters"
              onClick={() => {/* TODO: Implement system settings */}}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <LogoutButton />
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {renderPage()}
          </div>
        </div>
      </main>
    </div>
  );
};

const DashboardCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}> = ({ icon, title, description, onClick }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg cursor-pointer" onClick={onClick}>
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

export default AdminDashboard;