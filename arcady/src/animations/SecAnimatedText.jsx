import styled, { keyframes } from 'styled-components';

const SecAnimatedText = ({ text }) => {
  const letters = text.split('');

  return (
    <Text>
      {letters.map((letter, i) => (
        <Span key={i} index={i + 1}>
          {letter}
        </Span>
      ))}
    </Text>
  );
};

export default SecAnimatedText;
const textA = keyframes`0%{opacity:0;}100%{opacity:1;}`;
const a = keyframes`
0%{background:#fff; transform: scale(1, 1);}
25%{background:#fff; transform: scale(1, 1);}
75%{background:#fff; transform: scale(0, 1);}
100%{background:transparent;transform: scale(0, 1);}
`;
const Text = styled.div`
  font-size: 2em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  white-space: nowrap;
  margin: 5px 0;
  width: fit-content;
  position: relative;
  opacity: 0;
  animation: ${textA} 1s forwards;
  @media screen and (max-width: 1000px) {
    white-space: normal;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: top right;
    transform: scale(1, 1);
    top: 0;
    left: 0;
    animation: ${a} 1s forwards ease-out;
    animation-delay: 2s;
  }
`;
const Span = styled.span`
  color: #00a667;
  padding: 5px 0;
`;
