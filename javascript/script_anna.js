const astroUrl = 'https://serverless-functions-exercise.netlify.app/.netlify/functions/astronauts';
const issUrl = 'https://serverless-functions-exercise.netlify.app/.netlify/functions/iss';
const astronautsInSpace = document.querySelector('.r2_astronautNumber');
const astronautNames = document.querySelector('.r3_list_of_names');
let latitude = document.querySelector('.lat_num');
let longitude = document.querySelector('.long_num');


const apiRequest = (url, method, headers) => {
    return fetch(url, {
        method: method,
        headers: headers
      })
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            return response.json().then(errData => {
              console.log(errData);
              throw new Error('Server is not responding.');
            });
          }
        })
        .catch(error => {
          console.log(error);
          throw new Error('Network error');
        });
}

const getAstronautData = async () => {
    try{
        const response = await apiRequest(astroUrl, 'GET');
        let astroNo = response.number;
        let astroNames = response.people;
        astronautsInSpace.innerText = astroNo;
        for(person of astroNames) {
            let newName = document.createElement('li');
            newName.innerText = person.name;
            astronautNames.appendChild(newName);
        }
    } catch(error){
        console.log(error);
    }

}

const getIssData = async () => {
    try {
        const response = await apiRequest(issUrl, 'GET');
        const data = response;
        let newLatitude = data.iss_position.latitude;
        let newLongitude = data.iss_position.longitude;
        latitude.innerText = newLatitude;
        longitude.innerText = newLongitude;
    } catch(error) {
        console.log(error);
    }


}

const issDataIntervals = (n) => {
    setInterval(getIssData, n);
}

getAstronautData();
getIssData();
issDataIntervals(5000);