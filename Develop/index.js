// Required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [   
  {    
    type: 'input',    
    message: 'What is the title of your project?',    
    name: 'title',  
  },  
  {    
    type: 'input',    
    message: 'Please provide a brief description of your project:',    
    name: 'description',  
  },  
  {    
    type: 'input',    
    message: 'What are the installation instructions for your project?',    
    name: 'installation',  
  },  
  {    
    type: 'input',    
    message: 'How should your project be used?',    
    name: 'usage',  
  },  
  {    
    type: 'list',    
    message: 'Which license would you like to use for your project?',    
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'How can others contribute to your project?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What are the test instructions for your project?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('README.md file created!');
  });
}

// Function to generate the contents of the README file
function generateREADME(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ![License badge](https://img.shields.io/badge/license-${answers.license}-green.svg)
  This project is covered under the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  If you have any questions or concerns about this project, please contact me at ${answers.email}.
  You can also find more of my work at [https://github.com/${answers.username}](https://github.com/${answers.username}).
  `;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const fileName = 'README.md';
    const data = generateREADME(answers);
    writeToFile(fileName, data);
  });
}

// Function call to initialize app
init();