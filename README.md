## README Generator

In this assignment we were tasked with creating a professional README generator that a developer could
use for example to quickly create a README file for their repository. The user is presented with a series
of prompts that they fill in respectfully with information regarding their project. To prompt the user,
I am using the npm inquirer module which asks the user their project title, description, license, installation steps, etc. This data is then fed into a custom made module called generateMarkdown, which returns a string with the README outline that includes the user's data. Using the file system module's writeFile function, a README file is then created in the dist folder using the string from generateMarkdown.

 - Walkthrough Video: https://youtu.be/3DMhYmHBa3I