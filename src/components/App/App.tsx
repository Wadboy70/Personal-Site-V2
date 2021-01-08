import React from 'react';
import GlobalStyle from '../../globalStyles';
import SocialSidebar from '../SocialSidebar/SocialSidebar';
import { AppContainer } from './App.styles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppContainer>
        <SocialSidebar/>
      </AppContainer>
    </>
  );
}

export default App;
