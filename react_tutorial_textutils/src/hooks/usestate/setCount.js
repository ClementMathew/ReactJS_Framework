import React, { useState } from 'react';

export default function SetCount() {

    // Declaring a state variable named "count" initialized to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            {/* Function to update the count state when the button is clicked */}

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
