import React from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

// Mock data
const mockWalletData = {
  balance: 500,
  transactions: [
    { id: 1, type: 'credit', amount: 100, description: 'Admin added points' },
    { id: 2, type: 'debit', amount: 50, description: 'Booked session with Mentor Alice' },
    { id: 3, type: 'credit', amount: 200, description: 'Completed group project' },
  ]
};

const WalletPoints: React.FC = () => {
  const { balance, transactions } = mockWalletData;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Wallet Points</h2>
      <div className="flex items-center justify-between mb-6">
        <Wallet className="h-8 w-8 text-indigo-600" />
        <span className="text-2xl font-bold">{balance} points</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
      <ul className="space-y-3">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center">
              {transaction.type === 'credit' ? (
                <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <TrendingDown className="h-5 w-5 text-red-500 mr-2" />
              )}
              <span className="text-sm">{transaction.description}</span>
            </div>
            <span className={`font-semibold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
              {transaction.type === 'credit' ? '+' : '-'}{transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletPoints;