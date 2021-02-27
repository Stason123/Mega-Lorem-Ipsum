

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

// import User from './Models/user.js';


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

// Get data and display
sendRequest('GET', restApiUrl+'users/getusers')
  .then(data => {
    data.forEach(element => {
        const newUser = new User(element);
        const lastRow = table.rows.length;
        var row = table.insertRow(lastRow);
        row.setAttribute("id", `id-${newUser.id}`, 0);
        let i = 0;
        for (const [key, value] of Object.entries(newUser)) {
          var cell = row.insertCell(i);
          if (key === 'dateOfBirth') {            
            cell.innerHTML = `<input id="${key}-${newUser.id}" type="date" value="${new Date(value).toISOString().split('T')[0]}" />`;
          } else if (key === 'id') {
            cell.innerHTML = `<a class="${key}">${value}</a>`;
          } else if (key === 'gender') {
            const selectedMale = value === 'Male' ? 'selected' : '';
            const selectedFemale = value === 'Female' ? 'selected' : '';
            cell.innerHTML = `
              <select id="${key}-${newUser.id}">
                <option value="Male" ${selectedMale}>Male</option>
                <option value="Female" ${selectedFemale}>Female</option>
              </select>
            `;
          } else {
            cell.innerHTML = `<input id="${key}-${newUser.id}" type="text" value="${value}" />`;
          }
          i++;
        }
        var cell = row.insertCell(i);
        cell.innerHTML = `<button onclick="saveData(${newUser.id})" class="saveData">Save</button>`;
    });
  })
  .catch(err => console.log(err));


//   function saveData(data) {
//     const name = document.getElementById(`name-${data}`);
//     console.log('name', name.value);

//     const surname = document.getElementById(`surname-${data}`);
//     console.log('surname', surname.value);

//     const email = document.getElementById(`email-${data}`);
//     console.log('email', email.value);

//     const dateOfBirth = document.getElementById(`dateOfBirth-${data}`);
//     console.log('dateOfBirth', dateOfBirth.value);

//     const gender = document.getElementById(`gender-${data}`);
//     console.log('gender', gender.value);

// }

    // function saveData() {
    //   alert("Hello world!");
    // }
  // window.onload = function(){ 
  //   var button = document.getElementById("saveData");

  //   button.onclick = function() {
  //     alert("Hello world!");
  //   };
  // };
  // window.onload = (event) => {
  //   console.log('page is fully loaded');
  //   function saveData() {
  //     alert("Hello world!");
  //   }
  // };

  