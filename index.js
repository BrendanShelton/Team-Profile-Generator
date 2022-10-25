const generateHTML= require('./src/generateHTML')
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

let team = []
const questions = [{
    type: 'input',
    message: 'Enter the team manager\'s name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter the team manager\'s employee ID',
    name: 'ID',
  },
  {
    type: 'input',
    message: 'Enter the team manager\'s email address',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Enter the team manager\'s office number',
    name: 'office',
  },
  {
    type: 'loop',
    message: 'Do you want to add more team members?',
    name: 'members',
    questions: [
        {
            type: 'checkbox',
            message: 'What is the next team member\'s role',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: 'Enter the team member\'s name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter the team member\'s employee ID',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'Enter the team member\'s email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the team member\'s github username?',
            name: 'github',
            when: (answers) => answers.role[0] === "Engineer"
        },
        {
            type: 'input',
            message: 'What is the name of the team member\'s school?',
            name: 'school',
            when: (answers) => answers.role[0] === "Intern"
        },
    ]
  }];

function init() {
    inquirer
    .prompt(questions)
    .then((response) => getTeamMembers(response))
  }

function getTeamMembers (answers) {
    console.log(answers)
    const { name, ID, email, office, members } = answers
    console.log(members)
    team[0] = new Manager(name, ID, email, office)
    //for (let i = 0; 1 < members.length; i++)
    members.forEach(member => {
        if (member.role[0] === "Engineer") {
            const { name, ID, email, github } = member
            let engineer = new Engineer(name, ID, email, github)
            team.push(engineer)
        } else {
            const { name, ID, email, school } = member
            let intern = new Intern(name, ID, email, school)
            team.push(intern)
        }
    });
    

    fs.writeFile("./dist/index.html", generateHTML(team), (err) =>
    err ? console.error(err) : console.log('README file created in output folder')
    )
    
}
init();
/*
let counter = 0
const managerQuestions = [{
    type: 'input',
    message: 'Enter the team manager\'s name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter the team manager\'s employee ID',
    name: 'ID',
  },
  {
    type: 'input',
    message: 'Enter the team manager\'s email address',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Enter the team manager\'s office number',
    name: 'office',
  }];

const nextQuestion = [{
    type: 'checkbox',
    message: 'Do you want to add an engineer or and intern or are you finished building your team?',
    name: 'nextMember',
    choices: ["Engineer", "Intern", "finished"]
  }]

const generalQuestions = [{
    type: 'input',
    message: 'Enter the team member\'s name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter the team member\'s employee ID',
    name: 'ID',
  },
  {
    type: 'input',
    message: 'Enter the team member\'s email address',
    name: 'email',
  }]

const engineerQuestion = [{
    type: 'input',
    message: 'Enter the team member\'s github username',
    name: 'github',
}]

const internQuestion = [{
    type: 'input',
    message: 'Enter the team member\'s school',
    name: 'school',
}]

function init() {
    inquirer
    .prompt(managerQuestions.concat(nextQuestion))
    .then((response) => getTeamMembers(response))
  }

function getTeamMembers (firstAnswers) {
    console.log(firstAnswers)
    const { name, ID, email, office, nextMember } = firstAnswers
    team[0] = new Manager(name, ID, email, office)
    console.log(team)
    console.log(nextMember)
    
    addMember(nextMember)
    
    
}

function addMember(next) {
    counter++
    console.log("nextMember function")
    console.log(next)
    if (next == "Engineer") {
        addEngineer()
    }
    else if (next == "intern") {
        addIntern()
    } else{
        return "finished"
    }

}

function addEngineer() {
    let next
    inquirer
    .prompt(generalQuestions.concat(engineerQuestion.concat(nextQuestion)))
    .then((response) => {consolelog(response)
        const { name, ID, email, github, nextMember } = response
        let thisMember = new Engineer(name, ID, email, github)
        team.push(thisMember)
        next = nextMember
    })
    addMember(next)
}

function addIntern() {
    let next
    inquirer
    .prompt(generalQuestions.concat(internQuestion.concat(nextQuestion)))
    .then((response) => {consolelog(response)
        const { name, ID, email, school, nextMember } = response
        let thisMember = new Intern(name, ID, email, school)
        team.push(thisMember)
        next = nextMember
    })
    addMember(next)
}


function consolelog(data) {
    console.log(data)
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
   err ? console.error(err) : console.log('README file created in output folder')
  );
}




// Function call to initialize app
init();*/
