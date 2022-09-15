const Manager = require('../lib/Manager.js')

describe('Manager', () => {
    describe('getOfficeNum', () => {
        it('should return the office number of the project manager', () => {
            const managerOfficeNum = 1234
            const result = new Manager(1,"employeeName","employeeEmail",1234).getOfficeNum()
            expect(result).toEqual(managerOfficeNum)
        });
        it('should return false if no username was given', () =>{
            const result = new Manager(1,"employeeName","employeeEmail",null).getOfficeNum();
            expect(result).toEqual(false)
        })
    })
})