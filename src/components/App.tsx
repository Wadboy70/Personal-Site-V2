import React from 'react';
import GlobalStyle from '../utils/globalStyles';
import SocialSidebar from './Sidebar/SocialSidebar';
import styled from 'styled-components/macro';
import EmailSidebar from './Sidebar/EmailSidebar';
import Navbar from './Navbar/Navbar';

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
      </AppContainer>
    </>
  );
}

export default App;
