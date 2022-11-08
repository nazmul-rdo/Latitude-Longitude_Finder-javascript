function geocodeAddress() {
    const myAPIKey = "b6aafb82ecdd4a199157a229c3a40f07";
    const address = document.getElementById("address").value;
    const location = document.querySelector(".location")
    if (!address || address.length < 3) {
        console.log("The address string is too short. Enter at least three symbols");
        return;
    }

    const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${myAPIKey}`;

    // call Geocoding API - https://www.geoapify.com/geocoding-api/
    fetch(geocodingUrl).then(result => result.json())
        .then(featureCollection => {
            let lat = featureCollection.features[0].properties.lat;
            let lon = featureCollection.features[0].properties.lon;
            let country = featureCollection.features[0].properties.country;
            // console.log("lat: " + lat + " & " + "lon: " + lon);
            // console.log("add: " + address)
            location.innerHTML = `
                <p class="latLon"><span>Laitude:</span> ${lat}</p>
                <p class="latLon"><span>Longitude:</span> ${lon}</p>
                <p class="latLon"><span>Country:</span> ${country}</p>
                `

        });
}