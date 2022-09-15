const Engineer = require('../lib/Engineer.js')

describe('Engineer', () => {
    describe('getGitHub', () => {
        it('should return the GitHub username of the engineer', () => {
            const employeeGit = "employeeGit"
            const result = new Engineer(1,"employeeName","employeeEmail","employeeGit").getGitHub()
            expect(result).toEqual(employeeGit)
        });
        it('should return false if no username was given', () =>{
            const result = new Engineer(1,"employeeName","employeeEmail",null).getGitHub();
            expect(result).toEqual(false)
        })
    })
})