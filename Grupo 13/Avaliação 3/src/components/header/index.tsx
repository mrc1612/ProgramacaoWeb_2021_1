import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import starbucksLogo from '../../assets/starbucks-logo.png';
import userProfile from '../../assets/user-profile.png';
import userProfileInterrogation from '../../assets/user-profile-interrogation.jpg';

import { UserContext } from '../../context/user-context';

import { ThemeName } from '../../styles/themes';

import { Container, LoggedUser, ThemeSelection } from './styles';

interface Props {
  themeName: ThemeName;
  setThemeName: (newTheme: ThemeName) => void;
}

export const Header = ({ themeName, setThemeName }: Props) => {
  const { user } = useContext(UserContext);

  const location = useLocation();

  const setNewTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };

  return (
    <Container>
      <img src={starbucksLogo} alt='Starbucks Logo' />

      {user.id ? (
        <LoggedUser>
          {location.pathname === '/user-informations' && (
            <ThemeSelection
              name='theme'
              id='theme'
              value={themeName}
              onChange={setNewTheme}
            >
              <option value='light'>Light</option>
              <option value='dark'>Dark</option>
            </ThemeSelection>
          )}

          <Link to='/user-informations'>
            <img src={userProfile} alt='Perfil de usuário' />
          </Link>
        </LoggedUser>
      ) : (
        <img src={userProfileInterrogation} alt='Usuário não logado' />
      )}
    </Container>
  );
};
