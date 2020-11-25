const CLIENT_TOKEN = 'ITLYDV62HMT2TPC7O57D5D2AMGDZTNVJ';
const question = document.querySelector('.input');
const answer = document.querySelector('.chat');
const q = encodeURIComponent('Where are you from?');
const uri = 'https://api.wit.ai/message?v=20200513&q=' + q;
const auth = 'Bearer ' + CLIENT_TOKEN;

const talkToBucky = async () => {
    try {
        const response = await apiRequest(uri, 'GET', {Authorization: auth});
        console.log(response.entities['wit_from:wit_from'][0].value);
    } catch(error) {
        console.log(error);
    }
}

talkToBucky();