import { Container, Form, Section } from './styles';

export const UserInformations = () => {
  return (
    <Container>
      <Section>
        <Form>
          <input type='text' placeholder='Login' />
          <input type='email' placeholder='Email' />

          <textarea
            cols={30}
            rows={10}
            placeholder='Escreva um pouco sobre voce'
          ></textarea>

          <button type='submit'>Salvar</button>
        </Form>
      </Section>
    </Container>
  );
};
