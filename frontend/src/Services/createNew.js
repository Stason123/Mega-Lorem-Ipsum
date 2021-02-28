function createNew() {
    const table = document.getElementById("tableContainer");
    const lastRow = table.rows.length;
    const newUser = new User({
        id: 0,
        name: '',
        surname: '',
        email: '',
        dateOfBirth: '',
        gender: ''
    });
    const id = 'newUserId';
    var row = table.insertRow(lastRow);
        let i = 0;
        for (const [key, value] of Object.entries(newUser)) {
          var cell = row.insertCell(i);
          if (key === 'dateOfBirth') {            
            cell.innerHTML = `<input id="${key}-${id}" type="date"  />`;
          } else if (key === 'id') {
            cell.innerHTML = `<a class="${key}"></a>`;
          } else if (key === 'gender') {
            cell.innerHTML = `
              <select id="${key}-${id}">
                <option  selected>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            `;
          } else {
            cell.innerHTML = `<input id="${key}-${id}" type="text" value="${value}" />`;
          }
          i++;
        }
        var cell = row.insertCell(i);
        cell.innerHTML = `<button onclick="createAndsaveData()" class="saveData">Create</button>`;
        var cell2 = row.insertCell(i+1);
        cell2.innerHTML = `<button onclick="cencel(${newUser.id})" class="cencel">Cencel</button>`;
}

function createAndsaveData() {
  const name = document.getElementById(`name-newUserId`);
  console.log('name', name.value);

  const surname = document.getElementById(`surname-newUserId`);
  console.log('surname', surname.value);

  const email = document.getElementById(`email-newUserId`);
  console.log('email', email.value);

  const dateOfBirth = document.getElementById(`dateOfBirth-newUserId`);
  console.log('dateOfBirth', dateOfBirth.value);

  const gender = document.getElementById(`gender-newUserId`);
  console.log('gender', gender.value);
  const date = new Date(dateOfBirth.value);
  console.log(date.toISOString());
  const newUser = new User({
      id: 0,
      name: name.value,
      surname: email.value,
      email: email.value,
      dateOfBirth: date.toISOString(),
      gender: gender.value
  });

  console.log('newUser', newUser);
  sendRequest('POST', restApiUrl+'users/PostUser', newUser)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function cencel() {
  location.reload();
}