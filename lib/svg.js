class LogoText {
    constructor(text, color) {
        this.color = color;
        this.text = text;
    }
    render() {
        return `<text x="120" y="120" font-size="30" text-anchor="middle" fill="${this.color};">${this.text}</text></svg>`;
    }
}


class SVG {
    constructor(shape, logoText) {
        this.shape = shape;
        this.logoText = logoText;
    }
    render() {
        const svg = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">`
        return svg + this.shape.render() + this.logoText.render();


    }
}

module.exports = { LogoText, SVG };