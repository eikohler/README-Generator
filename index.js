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

const licenses = [
  'Apache 2.0 License',
  'Boost Software License 1.0',
  'BSD 3-Clause License',
  'BSD 2-Clause License',
  'Eclipse Public License 1.0',
  'GNU GPL v3',
  'IBM Public License Version 1.0',
];

const licenseBadges = [
  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
  '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
]

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
        type: 'list',
        name: 'license',
        message: 'What license does your application use?',
        choices: licenses,
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

  const getLicenseIndex = data => {
    data.licenseBadge = licenseBadges[licenses.indexOf(data.license)];
    return data;
  };

promptUser()
.then(getLicenseIndex)
.then(data => {
    console.log(data);
    fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
        if (err) throw new Error(err);
        console.log('Readme created! Check in dist folder.');
    });
});

// fs.writeFile('./dist/README.md', generateMarkdown(mockData), err => {
//     if (err) throw new Error(err);
//     console.log('Readme created! Check in dist folder.');
// });
  



