//imports generateHTML function
const generateHTML= require('./src/generateHTML')
//imports packages
const fs = require('fs');
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
//imports classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//array in which team member information will be stored
let team = []
//the questions for the user
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
            type: 'list',
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
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: 'input',
            message: 'What is the name of the team member\'s school?',
            name: 'school',
            when: (answers) => answers.role === "Intern"
        },
    ]
  }];

function init() {
    inquirer
    .prompt(questions)
    .then((response) => getTeamMembers(response))
  }

//called when the answers are received from the user
function getTeamMembers (answers) {
    //destructures the answers object containing the user's answers
    const { name, ID, email, office, members } = answers;
    
    //begins the array of team members by adding the manager's information to it
    team[0] = new Manager(name, ID, email, office);
    
    //loops through the members array and creates an instance of either the Engineer or Intern subclass and adds it to the team array
    members.forEach(member => {
        if (member.role === "Engineer") {
            const { name, ID, email, github } = member;
            let engineer = new Engineer(name, ID, email, github);
            team.push(engineer);
        } else {
            const { name, ID, email, school } = member;
            let intern = new Intern(name, ID, email, school);
            team.push(intern);
        }
    });
    
    //writes the string returned by the generateHTML function with the team array passed into it to the HTML file.
    fs.writeFile("./dist/index.html", generateHTML(team), (err) =>
    err ? console.error(err) : console.log('HTML file created in dist folder')
    );
    
}

//initializes app
init();
