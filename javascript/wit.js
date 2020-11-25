const CLIENT_TOKEN = 'ITLYDV62HMT2TPC7O57D5D2AMGDZTNVJ';

const q = encodeURIComponent('Where are you from?');
const uri = 'https://api.wit.ai/message?v=20200513&q=' + q;
const auth = 'Bearer ' + CLIENT_TOKEN;
fetch(uri, {headers: {Authorization: auth}})
  .then(res => res.json())
  .then(res => console.log(res))
 