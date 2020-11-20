const astroUrl = 'http://api.open-notify.org/astros.json';
const issUrl = 'http://api.open-notify.org/iss-now.json';
const astronautsInSpace = document.querySelector('.r2_astronautNumber');
const astronautNames = document.querySelector('.r3_list_of_names');
let latitude = document.querySelector('.lat_num');
let longitude = document.querySelector('.long_num');

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

const getIssData = async function () {
    const response = await fetch(issUrl);
    const data = await response.json();
    let newLatitude = data.iss_position.latitude;
    let newLongitude = data.iss_position.longitude;
    latitude.innerText = newLatitude;
    longitude.innerText = newLongitude;
}

const issDataIntervals = (n) => {
    setInterval(getIssData, n);
}

getIssData();
issDataIntervals(2000);

