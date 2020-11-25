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

