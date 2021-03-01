const table = document.getElementById("tableContainer");

// Get data and display
sendRequest('GET', restApiUrl+'users/getusers')
  .then(data => {
    let j = 1;
    data.forEach(element => {
      const newUser = new User(element);
      const lastRow = table.rows.length;
      var row = table.insertRow(lastRow);
      row.setAttribute("id", `id-${newUser.id}`, 0);
      let i = 1;
      var cellNr = row.insertCell(0);
      cellNr.innerHTML = `<a>${j}</a>`;
      j++;
      for (const [key, value] of Object.entries(newUser)) {
        var cell = row.insertCell(i);
        if (key === 'dateOfBirth') {            
          cell.innerHTML = `<input id="${key}-${newUser.id}" type="date" value="${new Date(value).toISOString().split('T')[0]}" />`;
        }
        else if (key === 'gender') {
          const selectedMale = value === 'Male' ? 'selected' : '';
          const selectedFemale = value === 'Female' ? 'selected' : '';
          cell.innerHTML = `
            <select id="${key}-${newUser.id}">
              <option value="Male" ${selectedMale}>Male</option>
              <option value="Female" ${selectedFemale}>Female</option>
            </select>
          `;
        } else if (key !== 'id') {
          cell.innerHTML = `<input id="${key}-${newUser.id}" type="text" value="${value}" />`;
        }
        i++;
      }
      var cell = row.insertCell(i);
      cell.innerHTML = `<button onclick="openModal(${newUser.id}, 'PUT')" class="btn btn-modal blue">Save</button>`;
      var cell2 = row.insertCell(i+1);
      cell2.innerHTML = `<button onclick="openModal(${newUser.id}, 'DELETE')" class="btn btn-modal red">Delete</button>`;
  });
  saveInLocalStorage(j);
  })
.catch(err => console.log(err));


