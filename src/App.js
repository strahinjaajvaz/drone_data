import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Wrapper from './components/Wrapper';
import Plane from './components/Plane'
import Tile from './components/Tile'


function App() {
  return (
    <div className="App">
      <Header />
      <Tile visited={[2]} />
      <Wrapper>
        <BrowserRouter>
          <Plane />
        </BrowserRouter>
      </Wrapper>
    </div >
  );
}

export default App;
