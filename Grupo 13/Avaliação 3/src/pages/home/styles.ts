import styled from 'styled-components';

export const Container = styled.main`
  margin: 66px 0 0 0;
`;

export const Section = styled.section`
  height: 80vh;

  background-color: var(--black);
`;

export const Nav = styled.nav`
  padding: 12px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: 300;

  ul {
    display: flex;

    li {
      margin: 0 12px;
      padding: 8px;

      border: none;
      border-radius: 6px;

      :hover {
        background-color: var(--blue);
      }

      .sub-menu {
        display: none;
        position: absolute; /* Faz com que ocupe os 126px */
        width: 126px;
      }

      :hover .sub-menu {
        display: block;
      }
    }
  }
`;
