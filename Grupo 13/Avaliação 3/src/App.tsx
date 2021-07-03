import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { UserProvider } from './context/user-context';

import { Header } from './components/header';
import { Footer } from './components/footer';

import { Home } from './pages/home';
import { UsersTable } from './pages/users-table';
import { Login } from './pages/login';
import { UserInformations } from './pages/user-informations';
import { Multimedia } from './pages/multimedia';

import GlobalStyles from './styles/global-styles';
import { ThemeName, themes } from './styles/themes';

export const App = () => {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <UserProvider>
          <Header themeName={themeName} setThemeName={setThemeName} />
          <Route exact path={'/'} component={Home} />
          <Route path={'/users-table'} component={UsersTable} />
          <Route path={'/login'} component={Login} />
          <Route path={'/user-informations'} component={UserInformations} />
          <Route path={'/multimedia'} component={Multimedia} />
          <Footer />
          <GlobalStyles />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
