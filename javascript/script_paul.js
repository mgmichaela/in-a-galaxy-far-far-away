const url = 'https://api.nasa.gov/planetary/apod?api_key=b3ooCOFo1hhbxYCFSzYgem3NeOoZjFEjxAWhFQWg';

const imageHolder = document.querySelector('.r10_r11')
const imgHeader = document.querySelector('.APOD')
const imgDesc = document.querySelector('.r12_picture_info')
const neoNumber = document.querySelector('.r7_current_obj')
const catchDate = document.querySelector('.footerDate')



const mainQuoteText = document.querySelector('.r16_quotetext')
const mainQuoteAuthor = document.querySelector('.r17_bodytext')

const today = new Date()
const startDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const endDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1);

const dateWindow = '*Current date is a 24 hour period between '+startDate+' / '+endDate+'.'

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

const meteorUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+startDate+'&end_date='+endDate+'&api_key=b3ooCOFo1hhbxYCFSzYgem3NeOoZjFEjxAWhFQWg'

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

getMeteorData()

 // Space Launch cards

const card1RocketName = document.querySelector('.card1 > .name')
const card1Rocketdate = document.querySelector('.card1 > .date')
const card1RocketImage = document.querySelector('.card1 > .image')

const card2RocketName = document.querySelector('.card2 > .name')
const card2Rocketdate = document.querySelector('.card2 > .date')
const card2RocketImage = document.querySelector('.card2 > .image')

const card3RocketName = document.querySelector('.card3 > .name')
const card3Rocketdate = document.querySelector('.card3 > .date')
const card3RocketImage = document.querySelector('.card3 > .image')

const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')

const rocketLaunchUrl = 'https://ll.thespacedevs.com/2.0.0/launch/upcoming/'

const getLaunchData = async () => {
    try {
        
        const response = await apiRequest(rocketLaunchUrl, 'GET');

        let c1rocketName = response.results[0].name;
        let c1rocketDate = response.results[0].window_start;
        let c1rocketImage = response.results[0].image
        let c1altText = response.results[0].mission.description;
            card1RocketName.innerText = c1rocketName;
            card1Rocketdate.innerText = c1rocketDate;
            card1RocketImage.style.backgroundImage = 'url('+c1rocketImage+')'
            card1.setAttribute('title',`'`+c1altText+`'`)

        let c2rocketName = response.results[1].name;
        let c2rocketDate = response.results[1].window_start;
        let c2rocketImage = response.results[1].image
        let c2altText = response.results[1].mission.description;
            card2RocketName.innerText = c2rocketName;
            card2Rocketdate.innerText = c2rocketDate;
            card2RocketImage.style.backgroundImage = 'url('+c2rocketImage+')'
            card2.setAttribute('title',`'`+c2altText+`'`)

        let c3rocketName = response.results[2].name;
        let c3rocketDate = response.results[2].window_start;
        let c3rocketImage = response.results[2].image
        let c3altText = response.results[2].mission.description;
            card3RocketName.innerText = c3rocketName;
            card3Rocketdate.innerText = c3rocketDate;
            card3RocketImage.style.backgroundImage = 'url('+c3rocketImage+')'
            card3.setAttribute('title',`'`+c3altText+`'`)

    } catch(error) {
        console.log(error);
    }
}

getLaunchData()

///

catchDate.innerText = dateWindow

ScrollReveal ().reveal('.star_small, .r4_star3, .r4_star4, .r5_star_big' , {
    easing: 'ease',
    scale: '0.5',
    reset: 'true',
    delay: 550,
    duration: 500,
    });

ScrollReveal ().reveal('.star_big_10, .satilite, .r9_satilite, .r4_star2, .r4_star6, .r5_star_big2, .r7_star' , {
    easing: 'ease',
    scale: '0.5',
    reset: 'true',
    delay: 850,
    duration: 1500,
    });
    
ScrollReveal ().reveal('.star_big, .r3_star, .r4_star1' , {
    easing: 'ease',
    scale: '0.5',
    reset: 'true',
    delay: 350,
    duration: 2500,
    });
        
ScrollReveal ().reveal('.r2_astronautNumber, .r4_pop_no, .r5_percentage_text, .r7_current_obj' , {
    easing: 'ease',
    scale: '1',
    reset: 'true',
    delay: 250,
    origin: 'left',
    });

ScrollReveal ().reveal('.r3_list_of_names' , {
    easing: 'ease',
    scale: '1',
    reset: 'true',
    delay: 450,
    origin: 'left',
    });

    
ScrollReveal ().reveal('.r7_object' , {
    easing: 'ease-out',
    scale: '0.5',
    reset: 'true',
    delay: 250,
    duration: 3000,
    distance: '250px',
    origin: 'top right',
    rotate: {x:0,y:0,z:0}
    });

//Animations

const refreshRate = 1000 / 60;
const maxXPosition = 100;
let rect = document.querySelector('.r2_rocket');
let speedX = 0.15;
let positionX = 0;
    
window.setInterval(() => {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
    rect.style.transform = "translateY(-"+positionX + 'px)';
    }, refreshRate);

