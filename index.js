// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    //Project name
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You must enter a project title to continue.");
                return false;

            }
        }
    },

    //Desciption
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("You must enter a description to continue.");
                return false;

            }
        }
    },

    //Installation
    {
        type: 'input',
        name: 'installation',
        message: "If applicable, describe how to install your project",
    },

    //Usage
    {
        type: 'input',
        name: 'usage',
        message: "Provide an expliantion on how to use your project.",
    },

    //Contributing
    {
        type: 'input',
        name: 'contribute',
        message: "Please enter if other developers can contribue.",
    },

    //Test
    {
        type: 'input',
        name: 'test',
        message: "Please provide tests that can be performed.",
    },

    //License choices - required
    {
        type: 'checkbox',
        name: 'license',
        message: "From the options, select a license.",
        choices: ['MIT License', 'Apache 2.0 License', 'Mozilla Public License 2.0', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You must select a licence selection');
                return false;
            }
        }
    },

    //Github profile name - required
    {
        type: 'input',
        name: 'github',
        message: 'Enter your git hub profile name or link.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter a Github profile name or link.');
                return false;
            }
        }
    },


    //Email Address - required
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter a valid email address.');
                return false;
            }
        }
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Your ReadMe is being created!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};


// Function call to initialize app
init();
