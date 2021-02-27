export default class User {
    constructor(options) {
        console.log('options', options);
        this.id = options.id;
        this.name = options.name;
        this.surname = options.surname;
        this.email = options.email;
        this.dateOfBirth = new Date(options.dateOfBirth).toISOString().split('T')[0];
        this.gender = options.gender;
    }
}