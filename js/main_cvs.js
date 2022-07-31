// import possible due to type="module"attribute in html script tag
import 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js';
// create a variable to hold the API key
const mapToken = 'pk.eyJ1Ijoic3R1ZGlvcHJvamVjdHMiLCJhIjoiY2t3djUyeHhpMDJpaTJ2c2VoZWE0b3BtbSJ9.YOluxDwyY0oUTvf0Y8ec1Q';

mapboxgl.accessToken = mapToken; // pass in the API key

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 1.5,
    center: [200, -20]
});

async function getData() {
    const response = fetch('assets/smaller.csv');
    const data = await (await response).text();

    const table = data.split('\n').slice(1) // get rid of the first row of the CSV using the slice method
    table.forEach(row => {
        const columns = row.split(','); // get rid of the delimiter using the split method

        const name = columns[2];
        const facType = columns[3];
        const address = columns[4];
        const town = columns[5];
        const state = columns[6];
        const lat = columns[8];
        const lng = columns[9];

        console.log(name, lat, lng);

        new mapboxgl.Marker({}).setLngLat([0, 0]).addTo(map);


    })
}

getData();

