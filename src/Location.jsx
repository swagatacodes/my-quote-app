import { useEffect, useState } from "react";
// react component with a form which takes lat long and returns a location
export function Location() {

    // set initial state
    
    const [location, setLocation] = useState('');

    //array of random location names
    // const locationNames = ['New York', 'London', 'Kolkata', 'Vadodara', 'Nagpur', 'Thane', 'Pune', 'Jaipur', 'Bhopal', 'Visakhapatnam', 'Vishakhapatnam', 'Mangalore', 'Kanpur', 'Nashik', 'Agra', 'Coimbatore', 'Madurai', 'Vijayawada', 'Tiruchirappalli', 'Tiruppur', 'Kozhikode', 'Trivandrum', 'Kota', 'Thiruvananthapuram', 'Kochi', 'Visakhapatnam', 'Vellore', 'Kurnool', 'Rajkot', 'Aurangabad', 'Navi Mumbai', 'Amritsar', 'Raipur', 'Allahabad', 'Gwalior', 'Vijayawada', 'Jabalpur', 'Jodhpur', 'Gurgaon', 'Kolhapur', 'Nagpur', 'Jamshedpur', 'Bareilly', 'Gorakhpur', 'Lucknow', 'Kanpur', 'Bhiwandi', 'Saharanpur', 'Guntur', 'Amravati', 'Noida', 'Ghaziabad', 'Faridabad', 'Meerut', 'Moradabad', 'Ghaziabad', 'Bikaner', 'Nashik', ];
    const locationNames = ["Kolkata","Delhi"]
    //function takes latlong and returns random location
    function getLocation(lat,lng) {
        return locationNames[Math.floor(Math.random() * locationNames.length)];
    }

    // will be called on every render..
    useEffect(() => {
        console.log("will be called on every render of this component");
    });

    useEffect(() => {
        console.log("will be called on only once after the component is mounted");
    },[]);

    useEffect(() => {
        console.log("will be called on only when the location changes");
    },[location]);
    

    function handleSubmit(event) {
        event.preventDefault();
        let lat = event.target.elements.lat.value;
        let lng = event.target.elements.long.value;
        setLocation(getLocation(lat, lng));
    }


    return (
        <div>
            <h2>{location}</h2>
            <form onSubmit={handleSubmit}>
                <label>Latitude:</label>
                <input type="text" name="lat" />
                <label>Longitude:</label>
                <input type="text" name="long" />
                <button>Submit</button>
            </form>
        </div>
    );
}
