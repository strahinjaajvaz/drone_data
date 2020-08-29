import React, { useEffect, useRef, forwardRef } from 'react'

const Tile = forwardRef(({ visited, current }, ref) => {
    return <div
        {...{ ref }}
        className={`h-6 w-6 border-2 rad-6 border-purple-900 text-center rounded m-1 inline-block box-border relative
            ${visited
                ? "bg-blue-400"
                : visited === undefined ? "" : "bg-green-400"} `}>
        {visited || ""}
        {current && <span className="absolute z-10 text-red-700 text-3xl inset-0" style={{ top: -13 }}>X</span>}
    </div>
})

export default Tile;