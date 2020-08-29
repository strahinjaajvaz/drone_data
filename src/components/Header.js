import React from 'react'

import Wrapper from './Wrapper'

function Header({ onChange, value }) {
    return <div class="bg-gray-400 fixed w-full p-2">
        <Wrapper>
            <div className="flex items-center">
                <nav className="flex-1">Drone simulator</nav>
                <input id="draw" type="radio" name="type" value="draw" {...{ onChange }} checked={"draw" === value} />
                <label className="mr-4" htmlFor="draw">Draw</label>
                <input id="simulate" type="radio" name="type" value="simulate" {...{ onChange }} checked={"simulate" === value} />
                <label htmlFor="simulate">Simulate</label>
                <button className="bg-white px-4 rounded-lg ml-4">Start</button>
            </div>
        </Wrapper>
    </div>
}

export default Header;