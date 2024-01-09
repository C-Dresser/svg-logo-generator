const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Please enter text for your logo.',
        name: 'text',
        default: 'Enter up to 3 characters',
    },
    {
        type: 'input',
        message: 'What color do you want this text to be?',
        name: 'font',
        default: 'Enter up to 3 characters',
    },
    {
        type: 'input',
        message: 'What kind of shape do you want this text to be in?',
        name: 'type',
        default: 'Circle, triangle, or square',
    },
    {
        type: 'input',
        message: 'What color do you want this shape to be?',
        name: 'color',
        default: 'Enter a color name, like "Red", or a hexadecimal number, like "#ff0000".',
    },
]

function generateLogo(data) {

    const logodata =

    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${data.color}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.font}">${data.text}</text>
  
    </svg>
    
}

function init() {
    console.log('Init function called!');
   inquirer.prompt(questions).then((answers) => {
     writeToFile('testing.js', answers);
   });
  }

init();