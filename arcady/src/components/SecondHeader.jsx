import { useState } from 'react';
import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
const Header = ({ setSecMenu, SecMenu }) => {
  const [NavBar, setNavBar] = useState(false);
  const changeNavBar = () => {
    if (window.scrollY >= 300) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener('scroll', changeNavBar);
  return (
    <>
      <Container NavBar={NavBar}>
        <Logo>
          <div>
            <svg fill='#00a667' viewBox='0 0 285 44'>
              <mask id='logo__square__mask'>
                <rect x='0' y='0' fill='white'></rect>
                <circle cx='10' cy='37' r='3.8' fill='black'></circle>
              </mask>
              <g className='bear'>
                <path
                  mask='url(#logo__square__mask)'
                  d='M77.2,10.4l-4.2,2.4l-6.2,1.7l-6.9-1.2l-1.4,2.8l1.4,1l-1.7,0.5L32.9,0L25,3l1.4,0.5l-9.1,4.6l2,0.5l-9.5,6
		                L0.6,44L13,44l13.9-11.8l-2.2,3.4l4.5,8.3h13.2l-3.4-7l30.9-6l10.5-17L77.2,10.4z M66.1,25.5c-1.2,0-2.3-0.6-2.9-1.6l-22,6.4
		                c0,0,0,0,0,0c0,2.3-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2c0-1.5,0.8-2.9,2.1-3.6l-2.3-11c-0.1,0-0.2,0-0.4,0c-1.2,0-2.3-0.4-3.2-1.1
		                l-15.4,19c0.7,0.8,1.1,1.8,1.1,2.8c0,2.4-1.9,4.4-4.4,4.4c-2.4,0-4.4-1.9-4.4-4.4c0-2.4,1.9-4.4,4.4-4.4c0.6,0,1.1,0.1,1.7,0.3
		                l15.7-19.3c-0.5-0.8-0.8-1.8-0.8-2.8c0-3,2.4-5.4,5.4-5.4s5.4,2.4,5.4,5.4c0,2.2-1.3,4-3.1,4.9l2.3,11c0.1,0,0.1,0,0.2,0
		                c1.6,0,3,0.9,3.7,2.2L62.6,22c0-1.9,1.6-3.4,3.5-3.4c1.9,0,3.5,1.6,3.5,3.5S68,25.5,66.1,25.5z'
                ></path>
                <polygon points='8.2,16.2 2.6,19.6 0,25.2 5,25.2'></polygon>
                <path d='M59.7,36.3c0-0.3,0-1.5,0-1.9l0-0.2l-14,4l2.7,3.1l2.2,2.6h9.3L59.7,36.3L59.7,36.3z'></path>
                <line x1='8.5' y1='38.2' x2='8.5' y2='38.2'></line>
                <line x1='32.2' y1='9.1' x2='32.2' y2='9.1'></line>
                <line x1='32.2' y1='9.1' x2='32.2' y2='9.1'></line>
              </g>
            </svg>
          </div>
          <Contact SecMenu={SecMenu}>
            <span>JOUW TOEKOMSTBOUWER.</span>
            <div>
              038 760 1060 - <span>hello@arcady.nl</span>
            </div>
          </Contact>
        </Logo>

        <HeaderOptions>
          <HeaderOption>Over Arcady</HeaderOption>
          <HeaderOption>Arcademy</HeaderOption>
          <HeaderOption>Cases</HeaderOption>
          <HeaderOption>Updates</HeaderOption>
          <HeaderOption>
            Jobs
            <JobsNum>12</JobsNum>
          </HeaderOption>
          <HeaderOption>Contact</HeaderOption>
          <HeaderMenuBtn>
            {!SecMenu ? (
              <BiMenu size='2em' onClick={() => setSecMenu(!SecMenu)} />
            ) : (
              <CgClose size='2em' onClick={() => setSecMenu(!SecMenu)} />
            )}
          </HeaderMenuBtn>
        </HeaderOptions>
      </Container>
      <HeaderMenu SecMenu={SecMenu} NavBar={NavBar}>
        <MenuOption>Over Arcady</MenuOption>
        <MenuOption>Arcademy</MenuOption>
        <MenuOption>Cases</MenuOption>
        <MenuOption>Updates</MenuOption>
        <MenuOption>
          Jobs
          <JobsNumMenu>12</JobsNumMenu>
        </MenuOption>
        <MenuOption>Contact</MenuOption>
      </HeaderMenu>
    </>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: ${({ NavBar }) => (!NavBar ? `-80px` : 0)};
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 40px 0;
  background-color: #fff;
  z-index: 90;
  transition: top 0.5s ease;
  overflow: hidden;
`;
const Logo = styled.div`
  svg {
    z-index: 30;
    width: 14rem;
  }
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`;
const Contact = styled.div`
  margin-left: -110px;

  span {
    color: #0a0b0b;
    font-size: 16px;
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-weight: bolder;
  }
  div {
    color: #0a0b0b;
    font-size: 16px;
    font-family: 'Montserrat';
    text-transform: uppercase;
    span {
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
      text-transform: lowercase;
      font-weight: 400;
    }
  }
`;
const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderOption = styled.div`
  color: rgba(51, 49, 50, 0.8);
  text-transform: uppercase;
  padding: 20px;
  position: relative;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  line-height: 1.2;

  @media screen and (max-width: 1000px) {
    display: none;
  }
  &:before {
    content: '';
    position: absolute;
    top: 120%;
    left: 0;
    right: 0;
    bottom: -20%;
    background-color: #00a667;
  }
  &:hover {
    color: rgb(47, 47, 47);
    &::before {
      top: 110%;
      transition: top 0.2s ease;
    }
  }
`;
const JobsNum = styled.div`
  position: absolute;
  background: #ed001d;
  border-radius: 50%;
  width: 21px;
  height: 21px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 15px;
  top: 5px;
  right: 8px;
  cursor: pointer;
`;
const HeaderMenuBtn = styled.div`
  color: ${({ NavBar }) => (!NavBar ? `#00a667` : `rgba(255, 255, 255, 0.8)`)};
  padding: 20px;
  cursor: pointer;
  z-index: 99;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const HeaderMenu = styled.div`
  position: fixed;
  top: ${({ SecMenu }) => (!SecMenu ? `-200%` : 0)};
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ NavBar }) =>
    !NavBar ? `rgba(51, 49, 50, 0.95)` : `rgb(255, 255, 255)`};
  padding: 80px;
  z-index: 10;
  transition: top 1s ease;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const MenuOption = styled.div`
  height: 19%;
  color: #0a0b0bca;
  font-size: 21px;
  font-family: 'Montserrat', sans-serif;
  padding: 40px;
  border-bottom: 1px solid rgba(143, 143, 143, 0.2);
  text-align: center;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
`;
const JobsNumMenu = styled(JobsNum)`
  position: absolute;
  top: 40%;
  right: 50%;
  margin-right: -55px;
`;
