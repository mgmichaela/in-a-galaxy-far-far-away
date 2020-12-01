const CLIENT_TOKEN = 'ITLYDV62HMT2TPC7O57D5D2AMGDZTNVJ';
const input = document.querySelector('.chatInput');
const question = document.querySelector('.humanMessage');
const answer = document.querySelector('.alienMessage');
const chatWindow = document.querySelector('.chatWindow > ul');
const sendButton = document.querySelector('.sendBtn');


const displayMsg = (type, msg) => {
    const newMsg = document.createElement('li');
    newMsg.innerText = msg;
    if (type === 'alien') {
        newMsg.classList.add('alienMessage');
    } else if (type === 'human') {
        newMsg.classList.add('humanMessage');
    }
    chatWindow.appendChild(newMsg);
}

const talkToBucky = async (uri, method, auth) => {
    try {
        let response = await apiRequest(uri, method, auth);
        console.log(response);
        let data = await response.entities;
        let key;

        for(let prop in data) {
            key = data[prop];
            console.log(key);
            break;
        }
        let answer;
        if(response.intents[0].name === 'get_calculation') {
            answer = math.evaluate(key[0].value);
        } else {
            answer = key[0].value;
        }
/*         let answer = key[0].value; */
        displayMsg('alien', answer);
    } catch(error) {
        console.log(error);
    }
}

const sendMessage = () => {
    const q = encodeURIComponent(input.value);
    const uri = 'https://api.wit.ai/message?v=20200513&q=' + q;
    const auth = 'Bearer ' + CLIENT_TOKEN;  
    displayMsg('human', input.value);
    talkToBucky(uri, 'GET', {Authorization: auth});
    input.value = '';
}

sendButton.addEventListener('click', sendMessage);
input.addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
        sendMessage();
    }
});
    
    