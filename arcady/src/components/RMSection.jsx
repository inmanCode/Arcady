import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const RMSection = () => {
  return (
    <Container id='readmore'>
      <Title>
        Arcady houdt van
        <span>
          <Typewriter
            options={{
              strings: [
                'azur.',
                '.net core.',
                'webpack.',
                'git.',
                'react.',
                'typescript.',
                'docker.',
                'agil.',
                'software.',
                'angular.',
                "API's.",
                'Dev Ops.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </Title>
      <Content>
        <p>
          Arcady houdt van veel. Vooral ook van uitdagingen. Want daarvan maken
          wij oplossingen. Slimme software met impact. Op merken en mensen, op
          vandaag en morgen.
        </p>
        <p>
          Noem ons meerwaardemakers, techdenkers of toekomstbouwers. We zijn
          bovenal businesspartner, met goede ideeën én resultaten. Daar houden
          we het meest van. En daarom kies je voor Arcady.
        </p>
      </Content>
    </Container>
  );
};

export default RMSection;
const Container = styled.div`
  background: #fff;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    font-size: 2em;
  }
`;
const Title = styled.h1`
  color: #00a667;
  font-size: 3.5rem;
  padding: 20px 0;
  padding-top: 40px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  width: 50%;
  margin: 0 auto;
  white-space: nowrap;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
  span {
    color: #333132;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    margin-left: 5px;
    font-size: 3.5rem;
    @media screen and (max-width: 1000px) {
      font-size: 2rem;
    }
  }
`;
const Content = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  font-size: 23px;
  line-height: 1.8;
  color: #333132;
  font-family: 'Montserrat', sans-serif;
  p {
    padding: 20px 0;
  }
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;
