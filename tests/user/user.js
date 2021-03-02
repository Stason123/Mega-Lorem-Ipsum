class User {
 
  constructor(options) {
      this.id = options.id;
      this.name = options.name;
      this.surname = options.surname;
      this.email = options.email;
      this.dateOfBirth = options.dateOfBirth;
      this.gender = options.gender;
  }
  getGenderCharacter() {
    const arr = ['Male', 'Female']
    return arr[Math.round(Math.random())];
  }
  getDOB() {
    const randomAge = Math.floor(Math.random() * 100) + 1;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    let month = randomMonth < 10 ? '0' + randomMonth.toString() : randomMonth.toString();
    let day = randomDay < 10 ? '0' + randomDay.toString() : randomDay.toString();
    const currentYear = new Date().getFullYear();
    return `${currentYear - randomAge}-${month}-${day}`;
  }

}

module.exports = User