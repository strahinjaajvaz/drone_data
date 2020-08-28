import React from 'react'

function Tile({ visited, }) {
    return <div
        className={`h-8 w-8 border-2 rad-6 border-purple-900 text-center rounded m-1
            ${Array.isArray(visited)
                ? "bg-blue-400"
                : visited && "bg-green-400"} `}>
        {visited || ""
        }</div>
}

export default Tile;