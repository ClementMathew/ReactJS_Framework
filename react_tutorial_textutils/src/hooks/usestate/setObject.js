import React, { useState } from 'react';

export default function SetObject() {

    // Declaring a state variable named "person" initialized to an object
    const [person, setPerson] = useState({ name: '', age: 0 });

    return (
        <div>
            <p>Name: {person.name}, Age: {person.age}</p>
            {/* Functions to update individual properties of the "person" object */}

            <input
                type="text"
                value={person.name}
                onChange={(e) => setPerson({ ...person, name: e.target.value })}
                placeholder="Enter name"
            />
            <input
                type="number"
                value={person.age}
                onChange={(e) => setPerson({ ...person, age: e.target.value })}
                placeholder="Enter age"
            />
        </div>
    );
}
