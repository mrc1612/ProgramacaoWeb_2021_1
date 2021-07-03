import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/user-context';

import { Container, Section, Form, ForgetOptions } from './styles';

export const Login = () => {
  const {
    userName,
    userPassword,
    handleUserName,
    handleUserPassword,
    addUser,
  } = useContext(UserContext);

  return (
    <Container>
      <Section>
        <Form onSubmit={addUser}>
          <input
            type='text'
            placeholder='Login'
            value={userName}
            onChange={handleUserName}
          />
          <input
            type='password'
            placeholder='Senha'
            value={userPassword}
            onChange={handleUserPassword}
          />

          <button type='submit'>Cadastrar</button>

          <ForgetOptions>
            <Link to={'#'}>Esqueci meu login</Link>
            <Link to={'#'}>Esqueci minha senha</Link>
          </ForgetOptions>
        </Form>
      </Section>
    </Container>
  );
};
