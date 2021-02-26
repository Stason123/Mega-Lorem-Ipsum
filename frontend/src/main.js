'use strict';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();

const requestUrlGet = 'https://localhost:44394/weatherforecast/Get';
const requestUrlPost = 'https://localhost:44394/weatherforecast/Post';



function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url)
    
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json')
    
    xhr.onload = () => {
      if(xhr.status >= 400) {
        reject('err', xhr.response)
      }
      resolve(xhr.response)
    }
    xhr.send(JSON.stringify(body))
  })
}

sendRequest('GET', requestUrlGet)
  .then(data => console.log(data))
  .catch(err => console.log(err));

const body = {
  id: 10
}

sendRequest('POST', requestUrlPost, body)
  .then(data => console.log(data))
  .catch(err => console.log(err));