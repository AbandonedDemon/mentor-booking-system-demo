import React, { useState } from 'react';
import { Users, UserPlus } from 'lucide-react';

// Mock data
const mockGroup = {
  name: "Team Innovators",
  members: [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Bob Johnson", email: "bob@example.com" },
  ]
};

const MyGroup: React.FC = () => {
  const [group, setGroup] = useState(mockGroup);

  const createNewGroup = () => {
    const newGroupName = prompt("Enter a name for your new group:");
    if (newGroupName) {
      setGroup({
        name: newGroupName,
        members: [{ name: "You", email: "your.email@example.com" }]
      });
    }
  };

  if (!group) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">My Group</h2>
        <p className="mb-4">You are not part of any group yet.</p>
        <button
          onClick={createNewGroup}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <UserPlus className="mr-2 h-5 w-5" />
          Create a New Group
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">My Group: {group.name}</h2>
      <ul className="space-y-3">
        {group.members.map((member, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-gray-900">{member.name} - {member.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyGroup;