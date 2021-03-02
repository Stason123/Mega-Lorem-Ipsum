const fs = require('fs');
const path = require("path");
eval(fs.readFileSync(path.resolve(__dirname, "../../frontend/src/helper/randomUser.js"), 'UTF8'))
const User = require('../user/user');

describe('Make user manipulation', () => {

    let user;
    let gender;
    let dateOfBirth;

    beforeAll( () => {
        user = new User({
            id: 0,
            name: 'TestName',
            surname: 'TestSurname',
            email: 'TestEmail',
            dateOfBirth: 'TestDate',
            gender: 'TestGender'
        });
    })

    afterAll(() => {
        console.log(user)
    });

    test('create user', () => {
        expect(user.name).toEqual('TestName');
        expect(user.surname).toEqual('TestSurname');
        expect(user.email).toEqual('TestEmail');
        expect(user.dateOfBirth).toEqual('TestDate');
        expect(user.gender).toEqual('TestGender');
    });

    test('change user gender', () => {
        //method using from frontend project 
        gender = getGenderCharacter();
        user.gender = gender;
        expect(user.name).toEqual('TestName');
        expect(user.surname).toEqual('TestSurname');
        expect(user.email).toEqual('TestEmail');
        expect(user.dateOfBirth).toEqual('TestDate');
        expect(user.gender).toEqual(gender);
    });

    test('change user date of birth', () => {
        //method using from frontend project 
        dateOfBirth = getDOB();
        user.dateOfBirth = dateOfBirth;
        expect(user.name).toEqual('TestName');
        expect(user.surname).toEqual('TestSurname');
        expect(user.email).toEqual('TestEmail');
        expect(user.dateOfBirth).toEqual(dateOfBirth);
        expect(user.gender).toEqual(gender);
    });
})