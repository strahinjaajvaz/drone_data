import React, { useState } from "react";

import Wrapper from "./Wrapper";

function DroneInfo({ text, value }) {
  return <p className="text-sm mr-4">{text}<span className="ml-1 text-xs">{value}</span></p>

}

function Header({
  onClick,
  uniqueLocations = 0,
  locationsPhotographed = 0,
  photoCount = 0,
}) {
  const [selected, setSelected] = useState("draw");
  return (
    <div className="bg-gray-400 fixed z-10 w-full p-2 top-0">
      <Wrapper>
        <div className="flex items-center">
          <nav className="flex-1">Drone simulator</nav>
          {<DroneInfo text="Unique locations" value={uniqueLocations} />}
          {<DroneInfo text="Photos taken" value={photoCount} />}
          {<DroneInfo text="Locations photographed" value={locationsPhotographed} />}
          <input
            id="draw"
            type="radio"
            name="type"
            value="draw"
            onChange={() => setSelected("draw")}
            checked={"draw" === selected}
          />
          <label className="mr-4 ml-2" htmlFor="draw">
            Draw
          </label>
          <input
            id="simulate"
            type="radio"
            name="type"
            value="simulate"
            onChange={() => setSelected("simulate")}
            checked={"simulate" === selected}
          />
          <label className="ml-2" htmlFor="simulate">Simulate</label>
          <button
            className="bg-white px-4 rounded-lg ml-4"
            onClick={() => onClick(selected)}
          >
            Start
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
