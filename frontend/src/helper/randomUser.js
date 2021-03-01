var jsonName;
var jsonSurname;

async function getJson() {
    await fetch("./json/firstName.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        jsonName = data;
    });

    await fetch("./json/lastName.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            jsonSurname = data;
        });
}

function getGenderCharacter() {
    const arr = ['Male', 'Female'];
    return arr[Math.round(Math.random())];
}

function getDob() {
    const randomAge = Math.floor(Math.random() * 100) + 1;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    let month = randomMonth < 10 ? '0' + randomMonth.toString() : randomMonth.toString();
    let day = randomDay < 10 ? '0' + randomDay.toString() : randomDay.toString();
    const currentYear = new Date().getFullYear();
    return `${currentYear - randomAge}-${month}-${day}`;
}

async function randomUser() {
    return new Promise((resolve) => {
        getJson().then(() => {
            var randomName = jsonName[Math.floor(Math.random()*jsonName.length)];
            var randomSurname = jsonSurname[Math.floor(Math.random()*jsonSurname.length)];
            var dob = getDob();
            var gender = getGenderCharacter();
            var user = new User({
                id: 0,
                name: randomName,
                surname: randomSurname,
                email: `${randomName}.${randomSurname}@email.com`,
                dateOfBirth: dob,
                gender: gender
            });
            resolve(user);
        });
    });
}