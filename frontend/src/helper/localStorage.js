function saveInLocalStorage(data) {
    localStorage.setItem("lastNum", data);
}

function getLastNum() {
    return localStorage.getItem("lastNum");
}