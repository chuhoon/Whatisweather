import { useEffect } from 'react';

function App() {
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log('현재위치', lat, lon);
        });
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return <div className='App'></div>;
}

export default App;
