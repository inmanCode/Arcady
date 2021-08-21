import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import SecondHeader from './SecondHeader';
const Header = ({ Menu, setMenu, setSecMenu, SecMenu }) => {
  return (
    <>
      <Container>
        <Logo>
          <svg fill='#00a667' viewBox='0 0 285 44'>
            <mask id='logo__square__mask'>
              <rect x='0' y='0' width='80.3' height='44' fill='white'></rect>
              <circle cx='10' cy='37' r='3.8' fill='black'></circle>
            </mask>
            <g className='bear' transform='scale(0.85)'>
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
            <g transform='translate(50,2) scale(0.85)'>
              <svg viewBox='0 0 344 62'>
                <g
                  transform='matrix(1.3333333,0,0,-1.3333333,0,793.70667) translate(-350,286)'
                  id='g10'
                >
                  <g transform='translate(435.213,293.2386)' id='g20'>
                    <path
                      id='path22'
                      style={{
                        fill: 'white',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                      }}
                      d='m 0,0 c 0,8.67 -7.028,15.723 -15.698,15.723 h -21.18 v -44.598 h 8.908 l -0.029,35.672 h 12.501 c 3.643,0 6.596,-2.953 6.596,-6.596 0,-3.643 -2.953,-6.597 -6.596,-6.597 v -0.005 h -2.119 l -1.509,-2.101 9.596,-20.437 h 9.478 l -7.266,15.681 C -2.925,-10.475 0,-5.585 0,0'
                    ></path>
                  </g>
                  <g transform='translate(447.8742,286.6365)' id='g24'>
                    <path
                      id='path26'
                      style={{
                        fill: 'white',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                      }}
                      d='m 0,0 c 0,11.962 13.042,17.178 21.695,11.58 l 5.726,6.617 C 23.478,21.25 18.515,23.096 13.17,23.096 0.446,23.096 -9.924,12.725 -9.924,0 c 0,-12.723 10.37,-23.094 23.094,-23.094 5.598,0 10.753,2.036 14.761,5.344 l -5.726,6.553 C 13.808,-17.558 0,-12.533 0,0'
                    ></path>
                  </g>
                  <g transform='translate(371.2301,308.9363)' id='g28'>
                    <path
                      id='path30'
                      style={{
                        fill: 'white',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                      }}
                      d='m 0,0 -22.712,-44.598 h 9.987 l 13.806,27.102 12.725,-27.102 h 9.861 L 2.607,0 Z'
                    ></path>
                  </g>
                  <g transform='translate(542.7376,273.2453)' id='g32'>
                    <path
                      id='path34'
                      style={{
                        fill: 'white',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                      }}
                      d='M 0,0 H -6.681 V 26.784 H 0 c 7.38,0 13.36,-5.98 13.36,-13.36 C 13.36,6.044 7.38,0 0,0 M 15.714,29.202 C 13.678,31.238 11.324,32.83 8.653,33.975 5.916,35.12 2.991,35.691 0,35.691 H -15.588 V -8.843 h 3.626 V -8.907 H 0 c 2.991,0 5.916,0.574 8.653,1.782 2.671,1.081 5.025,2.736 7.061,4.771 2.1,2.036 3.69,4.39 4.773,7.063 1.208,2.735 1.78,5.662 1.78,8.715 0,2.991 -0.572,5.918 -1.78,8.653 -1.083,2.671 -2.673,5.027 -4.773,7.125'
                    ></path>
                  </g>
                  <g transform='translate(596.4732,308.9885)' id='g36'>
                    <path
                      id='path38'
                      style={{
                        fill: 'white',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                      }}
                      d='M 0,0 -11.736,-23.039 -22.553,0 h -9.851 L -16.33,-34.039 V -44.65 h 9.023 v 10.69 L 9.988,0 Z'
                    ></path>
                  </g>
                  <g transform='translate(499.6517,308.9363)' id='g40'>
                    <path
                      id='path42'
                      style={{
                        fill: 'white',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                      }}
                      d='m 0,0 -22.712,-44.598 h 9.987 l 13.806,27.102 12.725,-27.102 h 9.861 L 2.607,0 Z'
                    ></path>
                  </g>
                </g>
              </svg>
            </g>
          </svg>
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
            {!Menu ? (
              <BiMenu size='2em' onClick={() => setMenu(!Menu)} />
            ) : (
              <CgClose size='2em' onClick={() => setMenu(!Menu)} />
            )}
          </HeaderMenuBtn>
        </HeaderOptions>
      </Container>
      <HeaderMenu Menu={Menu}>
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
      <SecondHeader setSecMenu={setSecMenu} SecMenu={SecMenu} />
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 40px 0;
`;
const Logo = styled.div`
  svg {
    width: 15rem;
    z-index: 30;
  }
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`;
const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderOption = styled.div`
  color: rgba(255, 255, 255, 0.8);
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

  &:hover {
    color: #fff;
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
  top: 3px;
  right: 6px;
  cursor: pointer;
`;
const HeaderMenuBtn = styled.div`
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  cursor: pointer;
  z-index: 30;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const HeaderMenu = styled.div`
  position: fixed;
  top: ${({ Menu }) => (!Menu ? `-120%` : 0)};
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(51, 49, 50, 0.95);
  padding: 80px;
  z-index: 10;
  transition: top 1s ease;
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const MenuOption = styled.div`
  height: 20%;
  color: rgba(255, 255, 255, 0.8);
  font-size: 21px;
  font-family: 'Montserrat', sans-serif;
  padding: 40px;
  border-bottom: 1px solid rgba(143, 143, 143, 0.2);
  text-align: center;
  position: relative;
  text-transform: uppercase;
`;
const JobsNumMenu = styled(JobsNum)`
  position: absolute;
  top: 37%;
  right: 50%;
  margin-right: -55px;
`;
