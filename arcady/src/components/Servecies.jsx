import styled from 'styled-components';
import IconsCol from './IconsCol';
import TitleCol from './TitleCol';
const Servecies = () => {
  return (
    <Container>
      <IconsContainer>
        <IconsCol
          icon='https://www.arcady.nl/media/1065/icon-consultancy.png'
          content='Goede adviezen, wij geven ze. Actuele kennis, wij delen het. Met jou en je afdeling. Want met nieuwe inzichten ontstaan nieuwe wegen. En de slimste oplossingen. Daar kom je verder mee. '
          title='Consultancy'
        />
        <IconsCol
          icon='https://www.arcady.nl/media/1811/icon-code.png'
          content='Front-end en back-end. Jouw software moet werken. Voor jou, je dromen en je doelen. Daarom ontwikkelen wij vandaag al waar jij morgen mee vooroploopt. Wij bouwen jouw toekomst.'
          title='Agile Software Development'
        />
        <IconsCol
          icon='https://www.arcady.nl/media/1067/icon-arcademy.png'
          content='Bijblijven is zilver, vooroplopen is goud. Echt een dikke plak. Met Arcademy, kennisplatform door en voor koplopers, pak je die voorsprong. Workshops, traineeships en meer. Wél je veters strikken. '
          title='Arcademy'
        />
      </IconsContainer>
      <Button>Lees verder</Button>
      <TitlesContainer>
        <TitleCol
          title='Rggesteyn - See U Move'
          image='https://www.arcady.nl/media/2030/seeumove_login.png?crop=0,0.00575373993095507,0,0&cropmode=percentage&width=825&height=540'
          button='BEKIJK DEZE CASE'
        />
        <TitleCol
          title='Wire-dattus'
          image='https://www.arcady.nl/media/2033/istock-1189129998-1-984x656.jpeg?center=0.505,0.5033333333333333&mode=crop&width=700&height=700'
          button='BEKIJK DEZE UPDATE'
        />
      </TitlesContainer>
    </Container>
  );
};

export default Servecies;
const Container = styled.div`
  background-color: white;
  background-image: url('https://www.arcady.nl/images/bg-topleft.png'),
    url('https://www.arcady.nl/images/bg-topright.png'),
    url('https://www.arcady.nl/images/bg-bottomleft.png'),
    url('https://www.arcady.nl/images/bg-bottomright.png');
  background-repeat: no-repeat;
  background-position: 0px -40px, 100% -40px, bottom left, bottom right;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const IconsContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  margin: 80px 0;
  height: 40px;
  line-height: 40px;
  font-family: 'Montserrat';
  font-size: 13px;
  padding: 0 20px;
  color: #fff;
  text-transform: uppercase;
  background-color: #00a667;
  border-radius: 20px;
  border: 0;
  outline: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;
  display: inline-block;
  white-space: nowrap;
  -webkit-appearance: none;
  font-weight: 700;
  &:hover {
    background-color: #008552;
  }
`;
const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
