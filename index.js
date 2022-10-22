//const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let team = []

const firstQuestions = [{
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
    type: 'input',
    message: 'how many other team members are there?',
    name: 'teamSize',
  }];

// TODO: Create a function to write README file
function getTeamMembers (firstAnswers) {
    console.log(firstAnswers)
    const { name, ID, email, office, teamSize } = firstAnswers
    team[0] = new Manager()
    
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
   err ? console.error(err) : console.log('README file created in output folder')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(firstQuestions)
  .then((response) => getTeamMembers(response))
}

// Function call to initialize app
init();
