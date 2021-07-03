import React, {
  ChangeEvent,
  createContext,
  useState,
  FormEvent,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  password: string;
}

interface UserContextData {
  user: User;
  userName: string;
  userPassword: string;
  handleUserName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleUserPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  addUser: (event: FormEvent) => void;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const history = useHistory();

  useEffect(() => {
    Cookies.set('user', user);
  }, [user]);

  const addUser = (event: FormEvent) => {
    event.preventDefault();

    const newUser: User = {
      id: Math.floor(Math.random() * 1e6),
      name: userName,
      password: userPassword,
    };

    setUser(newUser);
    setUserName('');
    setUserPassword('');

    history.push('/');
  };

  const logout = () => window.location.reload();

  const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userName,
        userPassword,
        addUser,
        handleUserName,
        handleUserPassword,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
