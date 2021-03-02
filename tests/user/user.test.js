const User = require('./user');

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
        gender = user.getGenderCharacter();
        user.gender = gender;
        expect(user.name).toEqual('TestName');
        expect(user.surname).toEqual('TestSurname');
        expect(user.email).toEqual('TestEmail');
        expect(user.dateOfBirth).toEqual('TestDate');
        expect(user.gender).toEqual(gender);
    });

    test('change user date of birth', () => {
        dateOfBirth = user.getDOB();
        user.dateOfBirth = dateOfBirth;
        expect(user.name).toEqual('TestName');
        expect(user.surname).toEqual('TestSurname');
        expect(user.email).toEqual('TestEmail');
        expect(user.dateOfBirth).toEqual(dateOfBirth);
        expect(user.gender).toEqual(gender);
    });
})