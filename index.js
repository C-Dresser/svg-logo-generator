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
        default: 'Enter a color name, like "Red", or a hexadecimal number, like "#ff0000".',
    },
    {
        type: 'list',
        message: 'What kind of shape do you want this text to be in?',
        name: 'type',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'What color do you want this shape to be?',
        name: 'color',
        default: 'Enter a color name, like "Red", or a hexadecimal number, like "#ff0000".',
    },
]

//built out renderLogo function
//updated functoin for proper nesting to write the svg data correctly
function renderLogo(data) {
    const { type, color, text, font } = data;

    let selectedShape;
    switch (type) {
        case 'Circle':
            selectedShape = new Circle();
            break;
        case 'Triangle':
            selectedShape = new Triangle();
            break;
        case 'Square':
            selectedShape = new Square();
            break;
    }

    selectedShape.setColor(color, font);

    const shapeSvg = selectedShape.render();
    
    const logoSvg = `<svg width="200" height="200">${shapeSvg}<text x="50%" y="50%" text-anchor="middle" fill="${font}">${text}</text></svg>`;

    return logoSvg;
}


//edited path in writeToFile function
//write to file
function writeToFile(fileName, data) {
    const logoCriteria = renderLogo(data);

    if(!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }

    fs.writeFileSync(`./output/${fileName}`, logoCriteria);
}

//changed file name in init
//app initializer
function init() {
    console.log('Init function called!');
   inquirer.prompt(questions).then((answers) => {
     writeToFile('logo.svg', answers);
   });
  }

init();