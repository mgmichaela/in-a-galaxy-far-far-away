



const quoteUrl = 'https://type.fit/api/quotes'
const dailyQuote = document.querySelector('.r16_quotetext')

const getQuoteData = async () => {
    try {
        const response = await apiRequest(quoteUrl, 'GET');
        let data = response;
        console.log(data);
        let num = Math.floor(Math.random() * 10)
        dailyQuote.innerText = JSON.stringify(data[num].text)
    } catch(error) {
        console.log(error);
    }
}

getQuoteData()