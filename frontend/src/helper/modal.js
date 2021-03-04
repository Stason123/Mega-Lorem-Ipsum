var model;
const myUrl = new URL('https://www.lorem-ipsum.com/');

function openModal(id, type, pageLoad = false) {
    let userUI;
    modal = document.getElementById("fin-fout-modal");
    const p = document.getElementById("confirmMessage");
    const pU = document.getElementById("userData");
    const h = document.getElementById("titleModal");
    const b = document.getElementById("modalButtons");
    if (id != 0) {
        userUI = getUserBuIdFromUI(id);
    }
    if (type === "PUT") {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?method=PUT&id=${id}`;
        if (pageLoad) {
            userUI = getUserDateToLocalStorage(type);
            console.log('userLocStor 1', userUI);
        } else {
            saveUserDateToLocalStorage(userUI, type);
        }
        h.innerText = "Save Changes";
        pU.innerText = `Change user date to
            Name: ${userUI.name},
            Surname: ${userUI.surname},
            Email: ${userUI.email},
            Date of birth: ${userUI.dateOfBirth},
            Gender: ${userUI.gender}
        `;
        p.innerText = 'Confirm changes?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="saveData(${id}, ${pageLoad})" >Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `
    } else if (type === "POST") {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?method=POST&id=0`;
        if (pageLoad) {
            userUI = getUserDateToLocalStorage(type)
            console.log('userLocStor 2', userUI);
        } else {
            userUI = getNewUserData();
            saveUserDateToLocalStorage(userUI, type);
        }
        h.innerText = "Create New";
        pU.innerText = `Create new user
        Name: ${userUI.name},
        Surname: ${userUI.surname},
        Email: ${userUI.email},
        Date of birth: ${userUI.dateOfBirth},
        Gender: ${userUI.gender}
    `;;
        p.innerText = 'Confirm creating new row?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="createAndsaveData(${pageLoad})">Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `
    } else if (type === "DELETE") {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?method=DELETE&id=${id}`;
        h.innerText = "Delete Row";
        pU.innerText = `Do you want delete user ${userUI.name} ${userUI.surname}?`
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="deleteData(${id})" >Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `

    } else if (type === "CREATE") {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?method=CREATE&id=0`;

        h.innerText = "Create 200 New Users";
        pU.innerText = "";
        p.innerText = 'Confirm creating?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="createNewTwoHundry()" >Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `
    }
    window.history.pushState({ path: newurl }, '', newurl);
    modal.classList.add('active');

}

function getUrlParams(parameterName) {
    let params = new URLSearchParams(window.location.search);
    return params.get(parameterName)
}

function clearUrl() {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({ path: newurl }, '', newurl);
}

function closeModal() {
    modal.classList.remove("active");
}

function pageReady() {
    const method = getUrlParams('method');
    const id = getUrlParams('id');
    if (method !== null) {
        openModal(id, method, true);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove("active");
    }
})