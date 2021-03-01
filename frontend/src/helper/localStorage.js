function saveInLocalStorage(data) {
    console.log('saveInLocalStorage', data);
    localStorage.setItem("lastNum", data);
}
  
function getLastNum() {
    return localStorage.getItem("lastNum");
}