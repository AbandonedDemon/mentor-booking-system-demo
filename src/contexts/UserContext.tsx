import { createContext } from 'react';

export type UserType = {
  email: string;
  role: 'admin' | 'mentor' | 'student';
};

export type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});