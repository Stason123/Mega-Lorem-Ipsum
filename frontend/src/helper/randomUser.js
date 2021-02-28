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

getJson().then(() => {
    console.log('name', jsonName);
    console.log('surname', jsonSurname);
    var randomName = jsonName[Math.floor(Math.random()*jsonName.length)];
    var randomSurname = jsonSurname[Math.floor(Math.random()*jsonSurname.length)];
    console.log(randomName, randomSurname)
});

function randomUser() {

}