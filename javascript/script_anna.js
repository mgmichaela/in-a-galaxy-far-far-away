const astroUrl = 'http://api.open-notify.org/astros.json';
const issUrl = 'http://api.open-notify.org/iss-now.json';
const astronautsInSpace = document.querySelector('.r2_astronautNumber');
const astronautNames = document.querySelector('.r3_list_of_names');
const latitude = document.querySelector('.lat_num');
const longitude = document.querySelector('.long_num');

const astronautData = fetch(astroUrl)
    .then(response => response.json())
    .then(data => {
        let astroNo = data.number;
        let astroNames = data.people;
        astronautsInSpace.innerText = astroNo;
        for(person of astroNames) {
            let newName = document.createElement('li');
            newName.innerText = person.name;
            astronautNames.appendChild(newName);
        }
    })

const issData = fetch(issUrl)
    .then(response => response.json())
    .then(data => {
        let newLatitude = data.iss_position.latitude;
        let newLongitude = data.iss_position.longitude;
        latitude.innerText = newLatitude;
        longitude.innerText = newLongitude;
    })