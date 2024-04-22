// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")
const path = require('path')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the Title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is the Description of your Project?"
    },
    {
        type: "input",
        name: "Installation",
        message: "What is the Installation Process?",
        input: ''
    },
    {
        type: "input",
        name: "Usage",
        message: "How can this project be used?"
    },
    {
        type: "list",
        name: "License",
        message: "Which license are you using?",
        choices: ["MIT","Apache 2.0","Boost Software License 1.0","GNU General Public License v3.0", 'none']
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who are the Contributers of this Project?"
    },
    {
        type: "input",
        name: "Tests",
        message: "What is the test process for this project?"
    },
    {
        type: "input",
        name: "Questions",
        message: "Any addition questions or support needed?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your Email?"
    },
    {
        type: "input",
        name: "Username",
        message: "What is your Github name?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, fileName), generateMarkdown(data), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("The file was saved!");
        }
      });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('README.md', userAnswers)
    })
}

// Function call to initialize app
init();