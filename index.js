const inquirer = require('inquirer');

const generateMarkdown = require('./src/generateMarkdown.js');

const fs = require('fs');

const mockData = {
    title: 'README Generator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan sodales lacus, sed molestie augue vehicula et. Pellentesque in nunc nec quam vestibulum pulvinar.',
    installation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan sodales lacus, sed molestie augue vehicula et. Pellentesque in nunc nec quam vestibulum pulvinar.',
    usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan sodales lacus, sed molestie augue vehicula et. Pellentesque in nunc nec quam vestibulum pulvinar.',
    contributing: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan sodales lacus, sed molestie augue vehicula et. Pellentesque in nunc nec quam vestibulum pulvinar.',
    tests: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan sodales lacus, sed molestie augue vehicula et. Pellentesque in nunc nec quam vestibulum pulvinar.',
    github: 'eikohler',
    email: 'erickohler1600@gmail.com',
};

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
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: projectInst => {
          if (projectInst) {
            return true;
          } else {
            console.log('Please enter your installation steps!');
            return false;
          }
        }
      },      
      {
        type: 'input',
        name: 'usage',
        message: 'What are the steps required to use your project?',
        validate: projectUse => {
          if (projectUse) {
            return true;
          } else {
            console.log('Please enter your usage steps!');
            return false;
          }
        }
      },      
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
        validate: projectCont => {
          if (projectCont) {
            return true;
          } else {
            console.log('Please enter the contribution guidelines!');
            return false;
          }
        }
      },      
      {
        type: 'input',
        name: 'tests',
        message: 'What are some tests for your project?',
        validate: projectCont => {
          if (projectCont) {
            return true;
          } else {
            console.log('Please enter a test for your project!');
            return false;
          }
        }
      },      
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: projectGit => {
          if (projectGit) {
            return true;
          } else {
            console.log('Please enter your Github Username!');
            return false;
          }
        }
      },      
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: projectEmail => {
          if (projectEmail) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },      
    ]);
  };

// promptUser().then(data => {
//     console.log(data);
//     fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
//         if (err) throw new Error(err);
//         console.log('Readme created! Check in dist folder.');
//     });
// });

fs.writeFile('./dist/README.md', generateMarkdown(mockData), err => {
    if (err) throw new Error(err);
    console.log('Readme created! Check in dist folder.');
});
  



