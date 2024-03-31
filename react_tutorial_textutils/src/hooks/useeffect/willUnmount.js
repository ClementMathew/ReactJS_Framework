import React, { useEffect } from 'react';

export default function WillUnmountUseEffect() {

    useEffect(() => {
        // Side effect code here
        console.log('Will Unmount Component Mounted');

        // Cleanup function
        return () => {
            console.log('Will Unmount Component Unmounted');
        };
    }, []);

    return <div>Will Unmount UseEffect {console.log("Rendering....")}</div>;
}
