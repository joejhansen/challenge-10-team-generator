const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(id, name, email, officeNum) {
        super(id, name, email)
        this.officeNum = officeNum
        this.type = "Manager"
    }
    getOfficeNum() {
        if (this.officeNum) {
            return this.officeNum;
        } else {
            return false
        }
    }
}

module.exports = Manager