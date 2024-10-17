import React, { useState } from 'react';
import { Users, Wallet, Calendar, MessageSquare } from 'lucide-react';
import LogoutButton from '../LogoutButton';
import MyGroupPage from '../pages/MyGroupPage';
import WalletPointsPage from '../pages/WalletPointsPage';

const StudentDashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'myGroup':
        return <MyGroupPage onBack={() => setCurrentPage(null)} />;
      case 'walletPoints':
        return <WalletPointsPage onBack={() => setCurrentPage(null)} />;
      default:
        return (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <DashboardCard
              icon={<Users />}
              title="My Group"
              description="View and manage your group"
              onClick={() => setCurrentPage('myGroup')}
            />
            <DashboardCard
              icon={<Wallet />}
              title="Wallet Points"
              description="Check your balance and transactions"
              onClick={() => setCurrentPage('walletPoints')}
            />
            <DashboardCard
              icon={<Calendar />}
              title="Book a Mentor"
              description="Schedule mentoring sessions"
              onClick={() => {/* TODO: Implement booking functionality */}}
            />
            <DashboardCard
              icon={<MessageSquare />}
              title="Feedback"
              description="View mentor feedback"
              onClick={() => {/* TODO: Implement feedback functionality */}}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <LogoutButton />
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {renderPage()}
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

export default StudentDashboard;