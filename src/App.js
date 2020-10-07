import React from 'react';
import './App.css';
import Container from './components/UI/Container/Container';
import MainPage from './containers/MainPage/MainPage';

const App = () => {
  return (
    <div className="App">
        <Container>
          <MainPage/>
        </Container>
    </div>
  );
}

export default App;
