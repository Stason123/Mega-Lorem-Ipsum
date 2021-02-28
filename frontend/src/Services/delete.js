function deleteData(id) {
  
    sendRequest('DELETE', restApiUrl+'users/DeleteUser/'+id)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  
}
