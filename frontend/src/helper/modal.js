var saveId;
var model;
const myUrl = new URL('https://www.lorem-ipsum.com/');

async function openModal(id, type) {
    saveId = id;
    modal = document.getElementById("fin-fout-modal");
    const p = document.getElementById("confirmMessage");
    const h = document.getElementById("titleModal");
    const b = document.getElementById("modalButtons");

    if (type === "PUT") {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?method=PUT&id=${id}`;
        h.innerText = "Save Changes";
        p.innerText = 'Confirm changes?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="saveData(${id})" >Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `
    } else if (type === "POST") {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?method=POST&id=0`;
        h.innerText = "Create New";
        p.innerText = 'Confirm creating new row?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="createAndsaveData()">Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `
    } else if (type === "DELETE") {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?method=DELETE&id=${id}`;
        h.innerText = "Delete Row";
        p.innerText = 'Confirm deleting?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="deleteData(${id})" >Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `

    } else if (type === "CREATE") {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?method=CREATE&id=0`;

        h.innerText = "Create 200 New Users";
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

async function pageReady() {
    const method = getUrlParams('method');
    const id = getUrlParams('id');
    if (method !== null) {
        openModal(id, method);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove("active");
    }
})