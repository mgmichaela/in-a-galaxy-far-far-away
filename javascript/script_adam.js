



const quoteUrl = 'https://type.fit/api/quotes'
const dailyQuote = document.querySelector('.r16_quotetext')
const dailyQuoteAuthor = document.querySelector('.r17_bodytext')

const getQuoteData = async () => {
    try {
        const response = await apiRequest(quoteUrl, 'GET');
        let data = response;
        let num = Math.floor(Math.random() * 10)
        dailyQuote.innerText = JSON.stringify(data[num].text)
        dailyQuoteAuthor.innerText = JSON.stringify(data[num].author)
    } catch(error) {
        console.log(error);
    }
}

getQuoteData()