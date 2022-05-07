const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

const fs = require('fs');

fs.writeFile('./dist/README.md', generateMarkdown(), err => {
    if (err) throw new Error(err);
    console.log('Readme created!');
});

