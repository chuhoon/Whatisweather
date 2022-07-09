import { useEffect } from 'react';

function App() {
    const getCurrentLocation = () => {
        console.log('getCurrentLocation');
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return <div className='App'></div>;
}

export default App;
