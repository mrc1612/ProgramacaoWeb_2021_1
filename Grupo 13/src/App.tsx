import { BrowserRouter, Route } from 'react-router-dom';

import { UserProvider } from './context/UserContext';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { UsersTable } from './pages/UsersTable';
import { Login } from './pages/Login';
import { UserInformations } from './pages/UserInformations';

import GlobalStyles from './styles/GlobalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Route exact path={'/'} component={Home} />
        <Route path={'/users-table'} component={UsersTable} />
        <Route path={'/login'} component={Login} />
        <Route path={'/user-informations'} component={UserInformations} />
        <Footer />
        <GlobalStyles />
      </UserProvider>
    </BrowserRouter>
  );
};
