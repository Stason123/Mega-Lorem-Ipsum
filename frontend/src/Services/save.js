function saveData(id) {
    const name = document.getElementById(`name-${id}`);
    console.log('name', name.value);
  
    const surname = document.getElementById(`surname-${id}`);
    console.log('surname', surname.value);
  
    const email = document.getElementById(`email-${id}`);
    console.log('email', email.value);
  
    const dateOfBirth = document.getElementById(`dateOfBirth-${id}`);
    console.log('dateOfBirth', dateOfBirth.value);
  
    const gender = document.getElementById(`gender-${id}`);
    console.log('gender', gender.value);
    const date = new Date(dateOfBirth.value);
    console.log(date.toISOString());
    const newUser = new User({
        id: id,
        name: name.value,
        surname: email.value,
        email: email.value,
        dateOfBirth: date.toISOString(),
        gender: gender.value
    });
    console.log('newUser', newUser);
    sendRequest('PUT', restApiUrl+'users/PutUser/'+id, newUser)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  
}
