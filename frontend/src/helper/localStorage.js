function saveInLocalStorage(data) {
    localStorage.setItem("lastNum", data);
}

function getLastNum() {
    return localStorage.getItem("lastNum");
}

function saveUserDateToLocalStorage(data, type) {
    localStorage.setItem(`user${type}`, JSON.stringify(data));
}

function getUserDateToLocalStorage(type) {
    return JSON.parse(localStorage.getItem(`user${type}`));
}