const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('./shapes');
const { LogoText, SVG } = require('./svg');
const questions = require('./questions');

class CLI {
    constructor() {
    }

    generateSVG(options) {
        const logo = new LogoText(options.text, options.textColor);
        let shape;
    
        switch (options.shape) {
            case 'Circle':
                shape = new Circle(options.shapeColor);

                break;
            case 'Triangle':
                shape = new Triangle(options.shapeColor); 
                break;
            case 'Square':
                shape = new Square(options.shapeColor);
                break;
            default:
                console.error('Invalid shape:', options.shape);
    
        }
    console.log(shape);
        // if (shape) {
            shape.setColor(options.shapeColor);
            return new SVG(shape, logo);
        // }
    

    }

    run() {
        return inquirer
            .prompt(questions)
            .then((options) => {
                const svg = this.generateSVG(options);
                console.log(svg);
                const markup = svg.render();
                return writeFile("./examples/logo.svg", markup);
            })
            .then(() => console.log('SVG written to logo.svg'))
            .catch((err) => {
                console.error(err);
                console.log('Something went wrong');
            });
    }

    


}

module.exports = CLI;
