import React, { useEffect } from 'react';

export default function DidUpdateUseEffect({ value }) {

    value = 'Clement'

    useEffect(() => {
        // Side effect code here

        console.log('Value changed:', value);
    }, [value]);

    return <div>Did Update UseEffect {console.log("Rendering...")}</div>;
}
