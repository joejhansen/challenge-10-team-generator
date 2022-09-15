const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email)
        this.school = school
        this.type = "Intern"
    }
    getSchool() {
        if (this.school) {
            return this.school
        }else{
            return false
        }
    }
}

module.exports = Intern