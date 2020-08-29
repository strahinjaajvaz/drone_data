import React, { useState } from 'react'

import Wrapper from './Wrapper'

function Header({ setRunType }) {
    const [selected, setSelected] = useState("draw")
    return <div class="bg-gray-400 fixed z-10 w-full p-2 top-0">
        <Wrapper>
            <div className="flex items-center">
                <nav className="flex-1">Drone simulator</nav>
                <input id="draw" type="radio" name="type" value="draw" onChange={() => setSelected("draw")} checked={"draw" === selected} />
                <label className="mr-4" htmlFor="draw">Draw</label>
                <input id="simulate" type="radio" name="type" value="simulate" onChange={() => setSelected("simulate")} checked={"simulate" === selected} />
                <label htmlFor="simulate">Simulate</label>
                <button className="bg-white px-4 rounded-lg ml-4" onClick={() => setRunType(selected)}>Start</button>
            </div>
        </Wrapper>
    </div>
}

export default Header;