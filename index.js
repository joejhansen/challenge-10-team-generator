const Employee = require('./lib/Employee.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')
const inquirer = require('inquirer')
const fs = require('fs')
let teamMembers = []
const htmlTop = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Hello, world!</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="description" content="" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
    <header class="container-fluid bg-danger">
        <div class="row">
            <div class="col d-flex justify-content-center">
                <h1 class="text-bg-danger">My Team</h1>
            </div>
        </div>
    </header>
    <main class="container">
        <div class="row">
            <div class="col-12">
                <div class="row d-flex flex-wrap">`

let htmlMiddle = ``

const htmlBottom = `</div>
</div>
</div>
</main>
<footer>
</footer>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
crossorigin="anonymous"></script>
</body>
</html>`

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the project manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the project manager?'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the office number of the project manager?'
        }
    ]).then((answer) => {
        let manager = new Manager(answer.id, answer.id, answer.email, answer.officeNum)
        for (let key in manager) {
            if (manager[key] === null || manager[key].trim('') === "") {
                console.log("Please provide an answer to all fields")
                return managerPrompt()
            }
        }
        teamMembers.push(manager)
        return employeesPrompt();
    })
}

const employeesPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern']
        }
    ]).then((answer) => {
        if (answer.type === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the engineer?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the ID of the engineer?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of the engineer?'
                },
                {
                    type: 'input',
                    name: 'gitUser',
                    message: 'What is the GitHub username of the engineer?'
                }
            ]).then((answer) => {
                let newEngineer = new Engineer(answer.id, answer.name, answer.email, answer.gitUser)
                for (let key in newEngineer) {
                    if (newEngineer[key] === null || newEngineer[key].trim('') === "") {
                        console.log("Please provide an answer to all fields")
                        return employeesPrompt()
                    }
                }
                teamMembers.push(newEngineer)
            }).then(() => {
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'addAnother',
                        message: 'Would you like to add another employee?'
                    }
                ]).then((answer) => {
                    if (answer.addAnother) {
                        return employeesPrompt();
                    } else {
                        return createHTML(teamMembers)
                    }
                })
            })
        } else {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the intern?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the ID of the intern?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of the intern?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school does the intern attend?'
                }
            ]).then((answer) => {
                let newIntern = new Intern(answer.id, answer.name, answer.email, answer.school)
                for (let key in newIntern) {
                    if (newIntern[key] === null || newIntern[key].trim('') === "") {
                        console.log("Please provide an answer to all questions")
                        return employeesPrompt()
                    }
                }
                teamMembers.push(newIntern)
            }).then(() => {
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'addAnother',
                        message: 'Would you like to add another employee?'
                    }
                ]).then((answer) => {
                    if (answer.addAnother) {
                        return employeesPrompt();
                    } else {
                        return createHTML(teamMembers)
                    }
                })
            })
        }
    })
}

const renderIcon = member => {
    if (member.school) {
        return `🎓`
    } else if (member.gitUser) {
        return `👓`
    } else if (member.officeNum) {
        return `☕`
    }
}

const renderMoreInfo = member => {
    if (member.school) {
        return `School: ${member.school}`
    } else if (member.gitUser) {
        return `Git Username: <a href="https://github.com/${member.gitUser}">${member.gitUser}</a>`
    } else if (member.officeNum) {
        return `Office Number: ${member.officeNum}`
    }
}

const createHTML = (teamMembers) => {
    console.log(teamMembers);
    teamMembers.forEach(member => {
        let newHTML = `<div class="col-sm-4 mt-1">
        <div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header bg-primary text-bg-primary">
                <div class="row">
                    <div class="col">
                        ${member.name}
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        ${renderIcon(member)} ${member.type}
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <ul class="list-group">
                    <li class="list-group-item">${member.id}</li>
                    <li class="list-group-item"><a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item">${renderMoreInfo(member)}</li>
                </ul>
            </div>
        </div>
    </div>`;
        htmlMiddle = htmlMiddle + newHTML
    });
    fs.writeFile('./src/test.html', `${htmlTop}\n${htmlMiddle}\n${htmlBottom}`, function (err) {
        if (err) return err
    })
}


managerPrompt();