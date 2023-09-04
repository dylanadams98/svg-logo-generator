const questions = [
  // Text prompt
  {
    type: "input",
    message:
      "What text would you like you logo to display? (Enter up to three characters)",
    name: "text",
  },
  // Text color prompt
  {
    type: "input",
    message:
      "Choose text color (Enter color keyword OR a hexadecimal number)",
    name: "textColor",
  },
  // Shape choice prompt
  {
    type: "list",
    message: "What shape would you like the logo to render?",
    choices: ["Triangle", "Square", "Circle"],
    name: "shape",
  },
  // Shape color prompt
  {
    type: "input",
    message:
      "Choose shapes color (Enter color keyword OR a hexadecimal number)",
    name: "shapeColor",
  },
]

module.exports = questions;