import React, { useEffect, useRef } from 'react'
import Tile from './Tile'

function Plane({ droneData, showMarker }) {
    const { minX, minY, maxX, maxY, droneCoordinates, x, y } = droneData
    const ref = useRef()

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView()
        }
    }, [droneData])

    let grid = []

    for (let i = minY; i <= maxY; i++) {
        let rowData = []

        for (let j = minX; j <= maxX; j++) {
            let valueAtPoint = droneCoordinates[`${j},${i}`]
            let xIndex, yIndex;
            if (minY === i)
                xIndex = "" + j
            if (minX === j)
                yIndex = "" + i

            rowData.push(<Tile
                key={`${j},${i}`}
                {...{ ref }}
                visited={valueAtPoint}
                current={x === j && y === i}
                {...{ showMarker, xIndex, yIndex }}
            />)
        }
        let width = (Math.abs(minX) + maxX + 1)

        grid = [<div className="flex justify-center" style={{ width: width * 32 }} >{rowData}</div>, ...grid]
    }

    return <div className="mt-16 mx-auto h-full w-mContent">{grid}</div>
}

export default Plane