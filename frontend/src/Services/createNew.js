async function createNew() {
    const table = document.getElementById("tableBody");
    const newUser = new User({
        id: 0,
        name: '',
        surname: '',
        email: '',
        dateOfBirth: '',
        gender: ''
    });
    const datalabel = new DataLabel();
    const id = 'newUserId';
    var row = table.insertRow(0);
    let i = 0;
    var j = getLastNum();
    var cellNr = row.insertCell(0);
    cellNr.setAttribute("data-label", "Nr.");
    cellNr.innerHTML = `<a>${j}</a>`;
    for (const [key, value] of Object.entries(newUser)) {
        if (key === 'dateOfBirth') {
            var cell = row.insertCell(i);
            cell.setAttribute("data-label", datalabel[key]);
            cell.innerHTML = `<input id="${key}-${id}" type="date"  />`;
        } else if (key === 'gender') {
            var cell = row.insertCell(i);
            cell.setAttribute("data-label", datalabel[key]);
            cell.innerHTML = `
      <select id="${key}-${id}">
        <option  selected>Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    `;
        } else if (key !== 'id') {
            var cell = row.insertCell(i);
            cell.setAttribute("data-label", datalabel[key]);
            cell.innerHTML = `<input id="${key}-${id}" type="text" value="${value}" />`;
        }
        i++;
    }
    var cell = row.insertCell(i);
    cell.innerHTML = `<button onclick="openModal(0, 'POST')" class="btn btn-modal blue">Create</button>`;
    var cell2 = row.insertCell(i + 1);
    cell2.innerHTML = `<button onclick="cencel()" class="btn btn-modal red">Cencel</button>`;
}

function getNewUserData() {
    const name = document.getElementById(`name-newUserId`);
    const surname = document.getElementById(`surname-newUserId`);
    const email = document.getElementById(`email-newUserId`);
    const dateOfBirth = document.getElementById(`dateOfBirth-newUserId`);
    const gender = document.getElementById(`gender-newUserId`);
    console.log(dateOfBirth)
    let date = new Date(dateOfBirth.value);
    const newUser = new User({
        id: 0,
        name: name.value,
        surname: surname.value,
        email: email.value,
        dateOfBirth: date,
        gender: gender.value
    });
    return newUser;
}


function createAndsaveData(getFromLocStor = fasle) {
    let newUser;
    if (getFromLocStor) {
        newUser = getUserDateToLocalStorage('POST');
    } else {
        newUser = getNewUserData();
    }
    sendRequest('POST', restApiUrl + 'users/PostUser', newUser)
        .then(data => {
            clearUrl();
            closeModal();
            location.reload();
            console.log(data)
        })
        .catch(err => console.log(err));
}

async function createNewTwoHundry() {
    closeModal();
    clearUrl();
    var usersArr = [];
    for (let i = 0; i < 200; i++) {
        var user = await randomUser();
        usersArr.push(user)
    }
    sendRequest('POST', restApiUrl + 'users/PostUserTwoHundy', usersArr)
        .then(data => {
            console.log(data)
            closeModal();
            location.reload();
        })
        .catch(err => console.log(err));
}


function cencel() {
    location.reload();
}