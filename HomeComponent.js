import React from 'react';

function Home() {
    return (
        fetch('foundation.json')
        .then(response => response.json())
        .then(data => console.log(data))
    );
}
    
export default Home; 