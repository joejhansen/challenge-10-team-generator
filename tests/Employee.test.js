const Employee = require('../lib/Employee.js')

describe('Employee', () => {
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const employeeName = "employeeName"
            const result = new Employee(1,"employeeName","employeeEmail").getName()
            expect(result).toEqual(employeeName)
        });
        it('should return false if no name was given', () =>{
            const result = new Employee(1,null,"employeeEmail").getName();
            expect(result).toEqual(false)
        })
    })
    describe('getID', () => {
        it('should return the ID of the employee', () => {
            const employeeID = 1
            const result = new Employee(1,"employeeName","employeeEmail").getID()
            expect(result).toEqual(employeeID)
        });
        it('should return false if no ID was given', () =>{
            const result = new Employee(null,"employeeName","employeeEmail").getID();
            expect(result).toEqual(false)
        })
    })
    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const employeeEmail = "employeeEmail";
            const result = new Employee(1,"employeeName","employeeEmail").getEmail()
            expect(result).toEqual(employeeEmail)
        });
        it('should return false if no email was given', () =>{
            const result = new Employee(1,"employeeName",null).getEmail();
            expect(result).toEqual(false)
        })
    })
    describe('getRole', () => {
        it('should return the role of the employee. Will return "Employee" unless otherwise specified', () => {
            const employeeRole = "Employee"
            const result = new Employee(1,"employeeName","employeeEmail").getRole()
            expect(result).toEqual(employeeRole)
        })
    })
})