import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import { Container, Section, Nav } from './styles';

export const Home = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <Container>
      <Section>
        <Nav>
          <ul>
            {user.id ? (
              <Fragment>
                <li>
                  <Link to={'/'} onClick={logout}>
                    Logout
                  </Link>
                </li>
                <li>
                  <Link to={'/users-table'}>Cadastro</Link>
                </li>
              </Fragment>
            ) : (
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
            )}

            <li>
              <Link to={'#'}>Produtos</Link>
              <ul className='sub-menu'>
                <li>
                  <Link to={'#'}>Camisetas</Link>
                </li>
                <li>
                  <Link to={'#'}>Copos</Link>
                </li>
                <li>
                  <Link to={'#'}>Café</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to={'#'}>Sobre</Link>
            </li>
          </ul>
        </Nav>
      </Section>
    </Container>
  );
};
