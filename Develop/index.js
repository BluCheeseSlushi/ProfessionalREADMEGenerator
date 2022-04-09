// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const questions = () => {

// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dis/${fileName}.md`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                global.projectName = nameInput;
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a project description');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step by step description of how to get your project running (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter project installation instructions');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples so users can use the project (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter project usage instructions');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Provide guidelines for contribution (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter project guidelines for contribution');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide describe the tests a contribution must pass (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to describe the project\'s tests');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (optional)',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicensed']
    }])
};

// Function call to initialize app
init()
    .then(projectData => {
        // console.log('fuck');
        const pageData = generateMarkdown(projectData);
        // console.log(pageData);
        return writeToFile(global.projectName, pageData)
    });
