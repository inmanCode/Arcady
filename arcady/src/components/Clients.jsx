import styled from 'styled-components';

const Clients = () => {
  return (
    <Main>
      <Container>
        <Title>
          Onze klanten.<span> Ook koplopers.</span>
        </Title>
        <p>
          Onze klanten durven te kiezen voor hun ambities. En voor Arcady. Dat
          maakt ons trots. Supertrots.
        </p>
        <Images>
          <img src='https://www.arcady.nl/media/1074/logo-ing.png' alt='' />
          <img src='https://www.arcady.nl/media/1076/logo-engie.png' alt='' />
          <img src='https://www.arcady.nl/media/1073/logo-pwc.png' alt='' />
          <img src='https://www.arcady.nl/media/1078/logo-abn.png' alt='' />
          <img src='https://www.arcady.nl/media/1075/logo-tln.png' alt='' />
        </Images>
        <button>BEKIJK CASES</button>
      </Container>
    </Main>
  );
};

export default Clients;
const Main = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px 0;
  padding-bottom: 100px;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  p {
    margin-bottom: 40px;
  }
  button {
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
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  span {
    color: #00a667;
  }
`;
const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 40px;
  img {
    width: 100px;
  }
`;
