import styled, { keyframes } from 'styled-components';
import homepageVid from '../assets/arcady_homepage.mp4';
import AnimatedText from '../animations/AnimatedText';
import SecAnimatedText from '../animations/SecAnimatedText';
import { GoChevronDown } from 'react-icons/go';

const Banner = () => {
  return (
    <Container>
      <video autoPlay loop muted>
        <source src={homepageVid} type='video/mp4' />
      </video>
      <BannerContent>
        <AnimatedText text='Je wilt vooroplopen.' />
        <AnimatedText text='Meer dan één stap.' />
        <AnimatedText text='Wij geven je die voorsprong.' />
        <SecAnimatedText text='Want wij zijn Arcady. We ontwikkelen software.' />
        <SecAnimatedText text='En jouw toekomst.' />
        <Button>Iets voor jou?</Button>
      </BannerContent>
      <Icon href='#readmore'>
        <GoChevronDown size='5rem' color='#00a667' />
      </Icon>
    </Container>
  );
};

export default Banner;
const buttonAnimations = keyframes`
0%{opacity:0;transform:translateY(40px)}
25%{opacity:1;transform:translateY(0)}
75%{opacity:1;transform:translate(0)}
100%{opacity:1;transform:translate(0)}`;
const chevAnimation = keyframes`
  0%,20%,50%,80%,100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(3px);
  }
`;
const Container = styled.div`
  max-height: 89vh;
  min-width: 100%;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 1000px) {
    font-size: 10px;
  }
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
  div:nth-child(1) {
    animation-delay: 0.1s;
  }
  div:nth-child(2) {
    animation-delay: 0.5s;
  }
  div:nth-child(3) {
    animation-delay: 1s;
  }
  div:nth-child(4) {
    animation-delay: 2s;
  }
  div:nth-child(5) {
    animation-delay: 2s;
  }
  button:nth-child(6) {
    animation-delay: 2.8s;
  }
`;
const Button = styled.button`
  height: 40px;
  line-height: 40px;
  font-family: 'Montserrat';
  font-size: 15px;
  padding: 0 20px;
  color: #fff;
  text-transform: uppercase;
  background-color: #00a667;
  border-radius: 20px;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  -webkit-appearance: none;
  align-self: flex-start;
  margin-top: 40px;
  width: 220px;
  font-weight: bold;
  transition: background-color 0.2s ease;
  animation-name: ${buttonAnimations};
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  opacity: 0;
  transform: translateY(40px);
  &:hover {
    background-color: #008552;
  }
`;
const Icon = styled.a`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  animation: ${chevAnimation} infinite 1.5s;
  cursor: pointer;
`;
