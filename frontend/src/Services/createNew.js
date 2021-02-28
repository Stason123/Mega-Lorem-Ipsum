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
        cell.innerHTML = `<button onclick="createAndsaveData(${id})" class="saveData">Create</button>`;
        var cell2 = row.insertCell(i+1);
        cell2.innerHTML = `<button onclick="cencel(${newUser.id})" class="cencel">Cencel</button>`;
}