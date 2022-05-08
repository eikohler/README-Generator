module.exports = data => {
  return `# ${data.title}

  ${data.licenseBadge}

  ## Description

  ${data.description}
  
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This application is covered under the ${data.license}.
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  - Github Username: ${data.github}
  - Link to Github: https://github.com/${data.github}
  - If you have any questions, please send me an email at ${data.email}`;
}