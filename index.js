const inquirer = require('inquirer');

const generateMarkdown = require('./src/generateMarkdown.js');

const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: projectTitle => {
          if (projectTitle) {
            return true;
          } else {
            console.log('Please enter your title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        validate: projectDesc => {
          if (projectDesc) {
            return true;
          } else {
            console.log('Please enter your description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: gitName => {
          if (gitName) {
            return true;
          } else {
            console.log('Please enter your Github Username!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => {
          if (confirmAbout) {
            return true;
          } else {
            return false;
          }
        }
      }
    ]);
  };

fs.writeFile('./dist/README.md', generateMarkdown(), err => {
    if (err) throw new Error(err);
    console.log('Readme created!');
});

