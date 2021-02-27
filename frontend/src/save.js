
function saveData(data) {
    const name = document.getElementById(`name-${data}`);
    console.log('name', name.value);

    const surname = document.getElementById(`surname-${data}`);
    console.log('surname', surname.value);

    const email = document.getElementById(`email-${data}`);
    console.log('email', email.value);

    const dateOfBirth = document.getElementById(`dateOfBirth-${data}`);
    console.log('dateOfBirth', dateOfBirth.value);

    const gender = document.getElementById(`gender-${data}`);
    console.log('gender', gender.value);

    const newUser = new User({
        id: data,
        name: name.value,
        surname: email.value,
        email: email.value,
        dateOfBirth: dateOfBirth.value,
        gender: gender.value

    });
    console.log('newUser', newUser);
}


