import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <BrowserRouter>
          <Route path="/" exact component={() => <p>test</p>} />
        </BrowserRouter>
      </Wrapper>
    </div >
  );
}

export default App;
