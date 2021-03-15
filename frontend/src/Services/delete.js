function deleteData(id) {

    sendRequest('DELETE', restApiUrl + 'users/DeleteUser/' + id)
        .then(data => {
            clearUrl();
            closeModal();
            location.reload();
            console.log(data)
        })
        .catch(err => console.log(err));

}