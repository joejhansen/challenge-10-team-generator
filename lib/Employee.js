class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email
    }
    getName() {
        if(this.name){
            return this.name
        } else{
            return false
        }
    }
    getID() {
        if (this.id) {
            return this.id
        } else {
            return false
        }
    }
    getEmail() {
        if (this.email) {
            return this.email
        } else {
            return false
        }
    }
    getRole() {
        if (this.type) {
            return this.type
        } else {
            return `Employee`
        }
    }
    printInfo() {
        if (!this.type) {
            this.type = "Employee"
        }
        console.log(`Name: ${this.name}`)
        console.log(`Type: ${this.type}`)
        console.log(`ID: ${this.id}`)
        console.log(`Email: ${this.email}`)
        if (this.school) {
            console.log(`School: ${this.school}`)
        }
        if (this.officeNum) {
            console.log(`Office Number: ${this.officeNum}`)
        }
        if (this.gitUser) {
            console.log(`GitHub Username: ${this.gitUser}`)
        }
    }
}

module.exports = Employee;