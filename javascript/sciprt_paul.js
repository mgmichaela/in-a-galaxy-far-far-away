const url = 'https://api.nasa.gov/planetary/apod?api_key=b3ooCOFo1hhbxYCFSzYgem3NeOoZjFEjxAWhFQWg';

const imageHolder = document.querySelector('.r10_r11')
const imgHeader = document.querySelector('.APOD')
const imgDesc = document.querySelector('.r12_picture_info')
const neoNumber = document.querySelector('.r7_current_obj')
const catchDate = document.querySelector('.footerDate')

const today = new Date()
const start_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const end_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1);

const dateWindow = '*Current date is a 24 hour period between '+start_date+' / '+end_date+'.'

const getApodData = async () => {
    try {
        const response = await apiRequest(url, 'GET');
        let data = response;
        let imgApod = data.url;
        let imgDescription = data.explanation;
        let imgTitle = data.title;
        imageHolder.style.backgroundImage = 'url('+imgApod+')'
        imgHeader.innerText = 'ASTRONOMY PICTURE OF THE DAY - '+imgTitle;
        imgDesc.innerText = imgDescription;
    } catch(error) {
        console.log(error);
    }
}

getApodData()

const meteorUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+start_date+'&end_date='+end_date+'&api_key=b3ooCOFo1hhbxYCFSzYgem3NeOoZjFEjxAWhFQWg'

const getMeteorData = async () => {
    try {
        const response = await apiRequest(meteorUrl, 'GET');
        let data = response;
        let meteorNumber = data.element_count;
        neoNumber.innerText = meteorNumber;
    } catch(error) {
        console.log(error);
    }
}

catchDate.innerText = dateWindow

getMeteorData()