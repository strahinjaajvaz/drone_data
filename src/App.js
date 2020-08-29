import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Wrapper from './components/Wrapper';
import Plane from './components/Plane'

import { parseInput } from './utils/parseInput'

import data from './data.json'

let dataObj = { minX: 0, minY: 0, maxX: 0, maxY: 0, droneCoordinates: {}, x: 0, y: 0 }

const runTypes = ["draw", "simulate"]

function App() {
  const [droneData, setDroneData] = useState(dataObj)
  const [runType, setRunType] = useState(runTypes[0])
  const drawRef = useRef(false)
  const index = useRef(0)

  useEffect(() => {
    if (false && runType === runTypes[1] && data.data.charAt(index.current)) {
      setTimeout(() => {
        index.current += 1;
        setDroneData(parseInput(data.data.charAt(index.current), droneData))
      }, 0)
    } else if (false && runType === runTypes[0] && !drawRef.current) {
      drawRef.current = true;
      let flightPath = null
      for (let char of data.data) {
        flightPath = parseInput(char, flightPath || droneData)
      }
      console.log(flightPath)
      setDroneData(flightPath)
    }
  }, [droneData, setDroneData])

  function onChange(e) {
    setRunType(e.target.value)
  }

  console.log(runType)

  return (
    <div className="App">
      <Header {...{ onChange, value: runType }} />
      <BrowserRouter>
        {/* <Plane {...{ droneData }} showMarker={runTypes[1] === runType} /> */}
      </BrowserRouter>
    </div >
  );
}

export default App;
