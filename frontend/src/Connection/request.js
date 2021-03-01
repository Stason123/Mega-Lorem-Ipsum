const restApiUrl = 'https://localhost:44394/';

async function sendRequest(method, url, body = null) {
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
  });
}