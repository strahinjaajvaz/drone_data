import React from 'react'
import Tile from './Tile'

function Plane({ droneData }) {
    const { minX, minY, maxX, maxY, droneCoordinates, x, y } = droneData
    let grid = []

    for (let i = minY; i <= maxY; i++) {
        let rowData = []

        for (let j = minX; j <= maxX; j++) {
            let valueAtPoint = droneCoordinates[`${j},${i}`]
            if (x === j && y === i) debugger
            if (valueAtPoint) {
                console.log("pic", x, y)
                rowData.push(<Tile visited={droneCoordinates[`${j},${i}`]} current={x === j && y === i} />)
            }
            else if (valueAtPoint === 0) {
                console.log("visi", x, y)

                rowData.push(<Tile visited={0} current={x === j && y === i} />)
            } else {

                rowData.push(<Tile />)
            }
        }
        let width = (Math.abs(minX) + maxX + 1)
        grid = [<div className="flex justify-center" style={{ width: width * 32 }} >{rowData}</div>, ...grid]
    }

    return <div className="overflow-scroll"><div >{grid}</div></div>
}

export default Plane