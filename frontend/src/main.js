

// function counter() {
//   let seconds = 0;
//   setInterval(() => {
//     seconds += 1;
//     document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
//   }, 1000);
// }

// counter();

// sendRequest('GET', requestUrlGet)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// const body = {
//   id: 10
// }

// sendRequest('POST', requestUrlPost, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

import User from './Models/user.js';

const restApiUrl = 'https://localhost:44394/';
const table = document.getElementById("tableContainer");

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



sendRequest('GET', restApiUrl+'users/getusers')
  .then(data => {
    data.forEach(element => {
        const newUser = new User(element);
        const lastRow = table.rows.length;
        var row = table.insertRow(lastRow);
        let i = 0;
        for (const [key, value] of Object.entries(newUser)) {
          var cell = row.insertCell(i);
          if (key === 'dateOfBirth') {            
            cell.innerHTML = `<input type="date" value="${value}" />`;
          } else {
            cell.innerHTML = `<input type="text" value="${value}" />`;
          }
          i++;
        }
    });
  })
  .catch(err => console.log(err));