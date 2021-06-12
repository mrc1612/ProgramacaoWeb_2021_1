import { Container, Section, Form, Table } from './styles';

export const UsersTable = () => {
  return (
    <Container>
      <Section>
        <Form>
          <input type='number' placeholder='Idade' required />
          <input type='text' placeholder='Nome Completo' required />
          <input type='date' placeholder='Data de nascimento' required />

          <button type='submit'>Enviar</button>
        </Form>

        <Table>
          <thead>
            <tr>
              <th>Idade</th>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19</td>
              <td>Marcos Botene</td>
              <td>06/07/2002</td>
              <td>
                <button type='submit'>Excluir</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </Container>
  );
};
