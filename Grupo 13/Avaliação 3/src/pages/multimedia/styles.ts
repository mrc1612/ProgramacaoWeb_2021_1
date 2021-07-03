import styled from 'styled-components';

export const Container = styled.main`
  margin: 66px 0 0 0;
`;

export const Section = styled.section`
  height: 80vh;

  background-color: var(--black);
`;

export const Videos = styled.div`
  margin: 0 auto;
  max-width: 992px;
  padding: 24px 0 0 0;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  iframe {
    width: 392px;
    height: 220.5px;
  }
`;
