import React, { useState } from 'react';
import { ArrowLeft, Edit, Trash2, UserPlus, Upload } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'mentor';
}

const mockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'student' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'student' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'mentor' },
  { id: 4, name: 'Bob Williams', email: 'bob@example.com', role: 'mentor' },
];

interface UserManagementPageProps {
  onBack: () => void;
}

const UserManagementPage: React.FC<UserManagementPageProps> = ({ onBack }) => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<Partial<User>>({ name: '', email: '', role: 'student' });

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSave = () => {
    if (editingUser) {
      setUsers(users.map(user => user.id === editingUser.id ? editingUser : user));
      setEditingUser(null);
    }
  };

  const handleCreate = () => {
    const id = Math.max(...users.map(u => u.id)) + 1;
    setUsers([...users, { id, ...newUser } as User]);
    setNewUser({ name: '', email: '', role: 'student' });
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Mock import functionality
    const newMockUsers: User[] = [
      { id: users.length + 1, name: 'Imported Student', email: 'imported.student@example.com', role: 'student' },
      { id: users.length + 2, name: 'Imported Mentor', email: 'imported.mentor@example.com', role: 'mentor' },
    ];
    setUsers([...users, ...newMockUsers]);
    alert('Mock data imported successfully!');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">User Management</h2>
        <button
          onClick={onBack}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Dashboard
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Add New User</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border rounded px-2 py-1 w-1/3"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border rounded px-2 py-1 w-1/3"
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'student' | 'mentor' })}
            className="border rounded px-2 py-1 w-1/6"
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
          </select>
          <button
            onClick={handleCreate}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            <UserPlus className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Import Users</h3>
        <div className="flex items-center space-x-2">
          <input
            type="file"
            accept=".csv"
            onChange={handleImport}
            className="hidden"
            id="csv-upload"
          />
          <label
            htmlFor="csv-upload"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            <Upload className="h-5 w-5 inline-block mr-2" />
            Import CSV
          </label>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">User List</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingUser?.id === user.id ? (
                  <input
                    type="text"
                    value={editingUser.name}
                    onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingUser?.id === user.id ? (
                  <input
                    type="email"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingUser?.id === user.id ? (
                  <select
                    value={editingUser.role}
                    onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as 'student' | 'mentor' })}
                    className="border rounded px-2 py-1"
                  >
                    <option value="student">Student</option>
                    <option value="mentor">Mentor</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {editingUser?.id === user.id ? (
                  <button onClick={handleSave} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(user)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit className="h-5 w-5" />
                  </button>
                )}
                <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-900">
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementPage;