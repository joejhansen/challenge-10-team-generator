const Intern = require('../lib/Intern.js')

describe('Intern', () => {
    describe('getSchool', () => {
        it('should return the school the intern attends', () => {
            const internSchool = "internSchool"
            const result = new Intern(1,"employeeName","employeeEmail","internSchool").getSchool()
            expect(result).toEqual(internSchool)
        });
        it('should return false if no school was given', () =>{
            const result = new Intern(1,"employeeName","employeeEmail",null).getSchool();
            expect(result).toEqual(false)
        })
    })
})