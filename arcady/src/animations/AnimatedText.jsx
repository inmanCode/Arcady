import styled, { keyframes } from 'styled-components';

const AnimatedText = ({ text }) => {
  const letters = text.split('');
  let delay = 0.01;
  return (
    <Text>
      {letters.map((letter, i) => {
        delay += 0.04;
        return (
          <Span key={i} index={i + 1} delay={delay}>
            {letter}
          </Span>
        );
      })}
    </Text>
  );
};

export default AnimatedText;
const spanAnimations = keyframes`
0%{color:gray;}
25%{ color:gray;}
75%{ color:gray;}
100%{color:white;}
`;
const textAnimations = keyframes`
0%{opacity:0;transform:translateY(40px)}
25%{opacity:1;transform:translateY(0)}
75%{opacity:1;transform:translate(0)}
100%{opacity:1;transform:translate(0)}`;
const Text = styled.div`
  color: white;
  font-size: 3em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  animation-name: ${textAnimations};
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  opacity: 0;
  transform: translateY(40px);
  white-space: nowrap;
  @media screen and (max-width: 1000px) {
    white-space: normal;
  }
`;
const Span = styled.span`
  animation-name: ${spanAnimations};
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
  &:nth-child(${({ index }) => parseInt(index)}) {
    animation-delay: ${({ delay }) => parseFloat(delay)}s;
    color: gray;
  }
`;
