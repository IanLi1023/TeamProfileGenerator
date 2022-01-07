const inquirer = require("inquirer");

const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const path = require('path')
const fs = require('fs')
const outputDirectory = path.resolve(__dirname, 'output')
const outputFile = path.join(outputDirectory, 'team.html')
const render = require('./lib/render')
const teamMembers = []


function addManager() {
    inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is your ID?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is your office number?',
    }])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager);
            console.log(teamMembers);
            addToTeam()
        })

    function addManager() {
        inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your ID?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your office number?',
        }])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
                teamMembers.push(manager);
                console.log(teamMembers);
                addToTeam()
            })
    }
}
function addManager() {
    inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is your ID?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is your office number?',
    }])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager);
            console.log(teamMembers);
            addToTeam()
        })
}

function addIntern() {
    inquirer.prompt([{
        type: 'input',
        name: 'internName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is your ID?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did you attend?',
    }])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school)
            teamMembers.push(intern);
            console.log(teamMembers);
            addToTeam()
        })
}

function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        name: 'engineerName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is your ID?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    }])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
            teamMembers.push(engineer);
            console.log(teamMembers);
            addToTeam()
        })
}
function addToTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'What kind of employee would you like to add to your team?',
            choices: ['Manager', 'Intern', 'Engineer', 'Nevermind']
        }
    ])
        .then(answers => {
            switch (answers.addMember) {
                case 'Manager':
                    addManager()
                    break;
                case 'Intern':
                    addIntern()
                    break;
                case 'Engineer':
                    addEngineer()
                    break;
                default: createTeam()
            }

        })
}
function createTeam() {
    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory)
    }
    fs.writeFileSync(outputFile, render(teamMembers), 'utf-8')
}

addToTeam();
