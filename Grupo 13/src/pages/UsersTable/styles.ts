import styled from 'styled-components';

export const Container = styled.main`
  margin: 66px 0 0 0;
`;

export const Section = styled.section`
  height: 80vh;

  background-color: var(--section);
`;

export const Form = styled.form`
  padding: 26px 0;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  input {
    margin: 0 12px;
    padding: 8px 12px;

    border: none;
    border-radius: 6px;
  }

  button {
    padding: 8px 12px;

    border: none;
    border-radius: 6px;

    cursor: pointer;

    :hover {
      background-color: #02c39a;
      color: #fff;
    }
  }
`;

export const Table = styled.table`
  margin: 0 auto;
  width: 628px;

  text-align: left;

  thead {
    tr {
      th {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }

  tbody {
    tr {
      td {
        font-size: 16px;
        font-weight: 300;

        button {
          padding: 8px 12px;

          border: none;
          border-radius: 6px;

          cursor: pointer;
        }
      }
    }
  }
`;
