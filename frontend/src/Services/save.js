function saveData(id) {
    const name = document.getElementById(`name-${id}`); 
    const surname = document.getElementById(`surname-${id}`);
    const email = document.getElementById(`email-${id}`);  
    const dateOfBirth = document.getElementById(`dateOfBirth-${id}`); 
    const gender = document.getElementById(`gender-${id}`);
    const date = new Date(dateOfBirth.value);

    const newUser = new User({
        id: id,
        name: name.value,
        surname: surname.value,
        email: email.value,
        dateOfBirth: date.toISOString(),
        gender: gender.value
    });
    
    sendRequest('PUT', restApiUrl+'users/PutUser/'+id, newUser)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  
}
