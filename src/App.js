import React, { useEffect, useState, useRef } from 'react';

import Header from './components/Header'
import Plane from './components/Plane'

import { parseInput } from './utils/parseInput'

import data from './data.json'

let dataObj = { minX: 0, minY: 0, maxX: 0, maxY: 0, droneCoordinates: {}, x: 0, y: 0 }

const runTypes = ["draw", "simulate"]

function App() {
  const [droneData, setDroneData] = useState(dataObj)
  const [runType, setRunType] = useState()
  const drawRef = useRef(false)
  const index = useRef(0)

  useEffect(() => {
    if (runType === runTypes[1] && data.data.charAt(index.current)) {
      setTimeout(() => {
        index.current += 1;
        setDroneData(parseInput(data.data.charAt(index.current), droneData))
      }, 250)
    } else if (runType === runTypes[0] && !drawRef.current) {
      drawRef.current = true;
      let flightPath = null
      for (let char of data.data) {
        flightPath = parseInput(char, flightPath || droneData)
      }
      setDroneData(flightPath)
    }
  }, [droneData, setDroneData, runType])

  return (
    <>
      <Header {...{ setRunType }} />
      {runType && <Plane {...{ droneData }} showMarker={runTypes[1] === runType} />}
    </ >
  );
}

export default App;
