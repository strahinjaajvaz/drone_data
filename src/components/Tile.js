import React, { useEffect, useRef } from 'react'

function Tile({ visited, current }) {
    const ref = useRef()

    useEffect(() => {
        if (current && ref.current) {
            ref.current.scrollIntoView()
        }
    }, [])

    return <div
        {...{ ref }}
        className={`h-6 w-6 border-2 rad-6 border-purple-900 text-center rounded m-1 inline-block box-border relative
            ${visited
                ? "bg-blue-400"
                : visited === undefined ? "" : "bg-green-400"} `}>
        {visited || ""}
        {current && <span className="absolute z-10 t" >X</span>}
    </div>
}

export default Tile;