var saveId;
var model;

function openModal(id, type) {
    saveId = id;
    modal = document.getElementById("fin-fout-modal");
    const p = document.getElementById("confirmMessage");
    const h = document.getElementById("titleModal");
    const b = document.getElementById("modalButtons");
    if (type === "PUT") {
        h.innerText = "Save Changes";
        p.innerText = 'Confirm changes?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="saveData(${id})" >Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `
    } else if (type === "POST") {
        h.innerText = "Create New";
        p.innerText = 'Confirm creating new row?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="createAndsaveData()">Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `
    } else if (type === "DELETE") {
        h.innerText = "Delete Row";
        p.innerText = 'Confirm deleting?';
        b.innerHTML = `
            <a class="btn btn-modal blue" onclick="deleteData(${id})" >Confirm</a>
            <a class="btn btn-modal blue" onclick="closeModal()">Cencel</a>
        `
    }    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove("active");
}  
