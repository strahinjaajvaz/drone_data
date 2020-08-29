import React, { useEffect, useRef, forwardRef } from 'react'

const Tile = forwardRef(({ visited, current, showMarker, xIndex, yIndex }, ref) => {
    return <div
        ref={current ? ref : undefined}
        className={`h-6 w-6 border-2 rad-6 border-purple-900 text-center rounded m-1 inline-block box-border relative
            ${visited
                ? "bg-blue-400"
                : visited === undefined ? "" : "bg-green-400"} `}>
        {visited || ""}
        {showMarker && current && <span className="absolute text-red-700 text-3xl inset-0" style={{ top: -13 }}>X</span>}
        {xIndex && <span className="absolute text-xs" style={{
            left: "6.5px",
            bottom: "-25px"
        }}>{xIndex}</span>}
        {yIndex && <span className="absolute text-xs" style={{
            left: "-25px",
        }}>{yIndex}</span>
        }
    </div >
})

export default Tile;