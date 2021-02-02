import React from 'react';
import GlobalStyle from '../utils/globalStyles';
import SocialSidebar from './Sidebar/SocialSidebar';
import styled from 'styled-components/macro';
import EmailSidebar from './Sidebar/EmailSidebar';
import Navbar from './Navbar/Navbar';
import HomeScreen from './HomeScreen/HomeScreen';

const AppContainer =  styled.div`
    min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppContainer>
        <Navbar/>
        <SocialSidebar/>
        <EmailSidebar/>
        <HomeScreen/>
      </AppContainer>
    </>
  );
}

export default App;
