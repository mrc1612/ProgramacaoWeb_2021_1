import styled from 'styled-components';

export const Container = styled.main`
  margin: 66px 0 0 0;
`;

export const Section = styled.section`
  height: 80vh;

  background-color: var(--section);
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: 20px 0 0;

  width: 300px;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 6px;
    padding: 12px 16px;

    border: none;
    border-radius: 6px;

    font-size: 16px;
  }

  textarea {
    margin-bottom: 6px;
    padding: 12px 16px;

    border: none;
    border-radius: 6px;

    font-size: 16px;
  }

  button {
    padding: 12px 16px;

    border: none;
    border-radius: 6px;

    font-size: 16px;
    font-weight: 600;
    color: var(--text);

    cursor: pointer;

    background-color: #284b63;
  }
`;
