import React from 'react';
import GlobalStyle from '../globalStyles';
import SocialSidebar from './Sidebar/SocialSidebar';
import styled from 'styled-components/macro';
import EmailSidebar from './Sidebar/EmailSidebar';

const AppContainer =  styled.div`
    min-height: 100vw;
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppContainer>
        <SocialSidebar/>
        <EmailSidebar/>
      </AppContainer>
    </>
  );
}

export default App;
