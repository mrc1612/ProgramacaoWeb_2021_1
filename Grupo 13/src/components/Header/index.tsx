import { useContext } from 'react';

import starbucksLogo from '../../assets/starbucks-logo.png';
import userProfile from '../../assets/user-profile.png';
import userProfileInterrogation from '../../assets/user-profile-interrogation.jpg';

import { UserContext } from '../../context/UserContext';

import { Container } from './styles';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <img src={starbucksLogo} alt='Starbucks Logo' />

      {user.id ? (
        <Link to='/user-informations'>
          <img src={userProfile} alt='Perfil de usuário' />
        </Link>
      ) : (
        <img src={userProfileInterrogation} alt='Usuário não logado' />
      )}
    </Container>
  );
};
