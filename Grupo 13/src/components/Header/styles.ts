import styled from 'styled-components';

export const Container = styled.header`
  top: 0;
  padding: 8px;

  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  background-color: var(--header);

  img {
    width: 56px;
  }
`;
