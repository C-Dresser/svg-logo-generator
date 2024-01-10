//added new requirement for shape data
const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');

//template literal for user input
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
        choices: 'Circle, triangle, or square',
    },
    {
        type: 'input',
        message: 'What color do you want this shape to be?',
        name: 'color',
        default: 'Enter a color name, like "Red", or a hexadecimal number, like "#ff0000".',
    },
]

function renderLogo(data) {
    return Circle
}

//write to file
function writeToFile(fileName, data) {
    const logoCriteria = renderLogo(data);

    if(!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }

    fs.writeFileSync('logo.svg', logoCriteria);
}

//app initializer
function init() {
    console.log('Init function called!');
   inquirer.prompt(questions).then((answers) => {
     writeToFile('testing.js', answers);
   });
  }

init();