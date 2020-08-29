import React, { useEffect, useRef } from 'react'
import Tile from './Tile'

function Plane({ droneData }) {
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
            if (valueAtPoint) {
                rowData.push(<Tile visited={droneCoordinates[`${j},${i}`]} current={x === j && y === i} {...{ ref }} />)
            }
            else if (valueAtPoint === 0) {
                rowData.push(<Tile visited={0} current={x === j && y === i} {...{ ref }} />)
            } else {
                rowData.push(<Tile />)
            }
        }
        let width = (Math.abs(minX) + maxX + 1)
        grid = [<div className="flex justify-center" style={{ width: width * 32 }} >{rowData}</div>, ...grid]
    }

    return <div className="mt-16 overflow-scroll max-h-80vh"><div className="mx-auto w-mContent">{grid}</div></div>
}

export default Plane