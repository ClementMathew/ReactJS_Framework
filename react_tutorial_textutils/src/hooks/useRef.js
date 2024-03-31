import React, { useRef, useEffect } from 'react';

export default function UseRef() {

    // Declare a ref to store the DOM element reference
    const inputRef = useRef(null);

    useEffect(() => {

        // Focus the input element when the component mounts
        inputRef.current.focus();
    }, []);

    return <input type="text" ref={inputRef} />;
}
