import { Container, Section, Videos } from './styles';

export const Multimedia = () => {
  return (
    <Container>
      <Section>
        <Videos>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/Es8QSe48H3Y'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Videos>
      </Section>
    </Container>
  );
};
