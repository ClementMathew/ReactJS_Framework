import React, { useEffect } from 'react';

export default function DidMountUseEffect() {


    useEffect(() => {
        // Side effect code here
        console.log('Did Mount Component rendered');
    });

    return <div>Did Mount UseEffect {console.log("Renedering...")}</div>;
}