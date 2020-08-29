import React from 'react'

import Wrapper from './Wrapper'

function InfoPanel() {
    return <Wrapper>
        <div className="mt-16"></div>
        <h1 className="text-3xl">Welcome to  the Drone Path Visualizer </h1>
        <ol className="list-disc mt-4">
            <li>Select the type of animation you want</li>
            <li>Click <strong>Start</strong> and enjoy the show!</li>
        </ol>
    </Wrapper>
}

export default InfoPanel