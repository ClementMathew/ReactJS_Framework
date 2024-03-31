import React, { useEffect } from 'react';

export default function CombinedUseEffect({ value }) {

    value = 'Clement'

    // Effect for initial render
    useEffect(() => {
        console.log('Did Mount Component rendered');
    });

    // Effect for value change
    useEffect(() => {
        console.log('Value changed:', value);
    }, [value]);

    // Effect for component unmount
    useEffect(() => {
        console.log('Will Unmount Component mounted');

        return () => {
            console.log('Will Unmount Component unmounted');
        };
    }, []);

    return <div>Combined UseEffect{console.log("Rendering...")}</div>;
}
