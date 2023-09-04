class Shape {
    constructor() {
        this.color = "";
       
    }
    setColor(color) {
        this.color = color;
    }

}

class Square extends Shape {
    constructor() {
            super();
            // this.color = color;
        }

        render() {
            const svg = `<rect x="90" y="40" width="100" height="100" fill="${this.color}"/>`;
            return svg;
        }
    }

    class Circle extends Shape {
        constructor() {
                super();
                // this.color = color;
            }
    
            render() {
                const svg = `<circle x="90" y="40" width="100" height="100" fill="${this.color}"/>`;
                return svg;
            }
        }

        class Triangle extends Shape {
            constructor() {
                    super();
                    // this.color = color;
                }
        
                render() {
                    const svg = `<polygon points="150, 18 244, 182 56, 182" x="90" y="40" width="100" height="100" fill="${this.color}"/>`;
                    return svg;
                }
            }


 module.exports = { Circle, Square, Triangle };