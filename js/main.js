// import possible due to type="module"attribute in html script tag
import 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js';
// create a variable to hold the API key
const mapToken = 'put your own key here, you naughty person you!';

mapboxgl.accessToken = mapToken; // pass in the API key

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 3.5,
    center: [133, -25]
});

async function getData() {
    const response = await fetch('assets/toilets.json');
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        const lat = data[i].Latitude;
        const lon = data[i].Longitude;
        const parking = data[i].Parking;
        const shower = data[i].Shower;
        const baby = data[i].BabyChange;

        if (baby) {
            new mapboxgl.Marker({ color: 'red' }).setLngLat([lon, lat]).addTo(map);
        } else if (parking) {
            new mapboxgl.Marker({ color: 'blue' }).setLngLat([lon, lat]).addTo(map);
        } else if (shower) {
            new mapboxgl.Marker({ color: 'gray' }).setLngLat([lon, lat]).addTo(map);
        }

        console.log(lat, lon, parking, shower, baby)
    }


}

getData()