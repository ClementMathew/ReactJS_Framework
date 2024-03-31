import React, { useState } from 'react';

export default function SetBoolean() {

    // Declaring a state variable named "isOn" initialized to false
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <p>The light is {isOn ? 'on' : 'off'}</p>
            {/* Function to toggle the "isOn" state when the button is clicked */}

            <button onClick={() => setIsOn(!isOn)}>
                Toggle light
            </button>
        </div>
    );
}
