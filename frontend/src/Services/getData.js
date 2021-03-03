const table = document.getElementById("tableBody");

// Get data and display
sendRequest('GET', restApiUrl + 'users/getusers')
    .then(data => {
        let j = 1;
        data.forEach(element => {
            const newUser = new User(element);
            const datalabel = new DataLabel();
            var row = table.insertRow(0);
            row.setAttribute("id", `id-${newUser.id}`, 0);
            let i = 0;
            var cellNr = row.insertCell(0);
            cellNr.setAttribute("data-label", "Nr.");
            cellNr.innerHTML = `<a >${j}</a>`;
            j++;
            for (const [key, value] of Object.entries(newUser)) {
                if (key === 'dateOfBirth') {
                    var cell = row.insertCell(i);
                    cell.setAttribute("data-label", datalabel[key]);
                    cell.innerHTML = `<input id="${key}-${newUser.id}" type="date" value="${new Date(value).toISOString().split('T')[0]}" />`;
                } else if (key === 'gender') {
                    var cell = row.insertCell(i);
                    cell.setAttribute("data-label", datalabel[key]);
                    const selectedMale = value === 'Male' ? 'selected' : '';
                    const selectedFemale = value === 'Female' ? 'selected' : '';
                    cell.innerHTML = `
            <select id="${key}-${newUser.id}">
              <option  value="Male" ${selectedMale}>Male</option>
              <option value="Female" ${selectedFemale}>Female</option>
            </select>
          `;
                } else if (key !== 'id') {
                    var cell = row.insertCell(i);
                    cell.setAttribute("data-label", datalabel[key]);
                    cell.innerHTML = `<input id="${key}-${newUser.id}" type="text" value="${value}" />`;
                }
                i++;
            }
            var cell = row.insertCell(i);
            cell.setAttribute("data-label", "");
            cell.innerHTML = `<button onclick="openModal(${newUser.id}, 'PUT')" class="btn btn-modal blue">Save</button>`;
            var cell2 = row.insertCell(i + 1);
            cell2.setAttribute("data-label", "");
            cell2.innerHTML = `<button onclick="openModal(${newUser.id}, 'DELETE')" class="btn btn-modal red">Delete</button>`;
        });
        saveInLocalStorage(j);
    })
    .catch(err => console.log(err));