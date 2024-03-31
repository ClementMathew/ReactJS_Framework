import React, { useState } from 'react';

export default function SetArray() {

    // Declaring a state variable named "list" initialized to an empty array
    const [list, setList] = useState([]);

    // Function to add an item to the "list" array
    const addItem = () => {
        setList([...list, Math.random()]);
    };

    return (
        <div>
            <ul>
                {/* Rendering list items */}
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Button to add a new item to the list */}
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}
