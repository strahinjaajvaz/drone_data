import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Wrapper from './components/Wrapper';
import Plane from './components/Plane'
import Tile from './components/Tile'

import { parseInput } from './utils/parseInput'

import data from './data.json'

let dataObj = { minX: 0, minY: 0, maxX: 0, maxY: 0, droneCoordinates: {}, x: 0, y: 0 }

function App() {
  const [droneData, setDroneData] = useState(dataObj)
  const index = useRef(0)


  useEffect(() => {
    if (data.data.charAt(index.current)) {
      setTimeout(() => {
        index.current += 1;
        setDroneData(parseInput(data.data.charAt(index.current), droneData))
      }, 1000)
    }
  }, [droneData, setDroneData])

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <BrowserRouter>
          <Plane {...{ droneData }} />
        </BrowserRouter>
      </Wrapper>
    </div >
  );
}

export default App;
