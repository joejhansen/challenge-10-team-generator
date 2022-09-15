const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(id, name, email, gitUser) {
        super(id, name, email)
        this.gitUser = gitUser
        this.type = "Engineer"
    }
    getGitHub() {
        if (this.gitUser) {
            return this.gitUser
        }else{
            return false
        }
    }
}

module.exports = Engineer