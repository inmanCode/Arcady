import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import styled from 'styled-components';

const Home = () => {
  const [Menu, setMenu] = useState(false);
  const [SecMenu, setSecMenu] = useState(false);
  if (SecMenu || Menu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  const mediaQuery = window.matchMedia('(min-width: 1000px)');

  useEffect(() => {
    const handleTabletChange = (e) => {
      if (e.matches) {
        setMenu(false);
        setSecMenu(false);
      }
    };
    mediaQuery.addEventListener('change', handleTabletChange);
    // Initial check
    handleTabletChange(mediaQuery);
  }, [mediaQuery]);

  return (
    <Conatiner Menu={Menu}>
      <Header
        setMenu={setMenu}
        Menu={Menu}
        SecMenu={SecMenu}
        setSecMenu={setSecMenu}
      />
      <Banner />
      <Rb>rewqr</Rb>
    </Conatiner>
  );
};

export default Home;

const Conatiner = styled.div``;
const Rb = styled.div`
  background: white;
  height: 100vh;
`;
