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

  background-color: var(--blue);

  img {
    width: 56px;
  }
`;

export const LoggedUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
`;

export const ThemeSelection = styled.select`
  padding: 8px;

  border: 2px solid var(--blue);
  border-radius: 6px;

  background-color: var(--black);

  font-weight: 600;

  color: var(--white);

  cursor: pointer;

  option {
    font-weight: 600;
  }
`;
