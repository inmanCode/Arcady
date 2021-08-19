import styled from 'styled-components';
import homepageVid from '../assets/arcady_homepage.mp4';

const Banner = () => {
  return (
    <Container>
      <video autoPlay loop muted>
        <source src={homepageVid} type='video/mp4' />
      </video>
      <BannerContent>
        Je wilt vooroplopen.
        <br /> Meer dan één stap.
        <br /> Wij geven je die voorsprong.
        <br />
        Want wij zijn Arcady. We ontwikkelen software.
        <br />
        En jouw toekomst.
      </BannerContent>
    </Container>
  );
};

export default Banner;
const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;
  height: 100vh;
  video {
    position: fixed;
    min-height: 100vh;
    min-width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    box-shadow: inset 0 0 0 2000px #3331324d;
  }
`;
const BannerContent = styled.div`
  height: 100%;
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 3em;
`;
