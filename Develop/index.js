// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const readmeGenerator = require("./readmeGenerator");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the name of your project?",
    // validate: (projectTitleInput) => {
    //   if (projectTitleInput) {
    //     return true;
    //   } else {
    //     console.log("You must enter a project name.");
    //     return false;
    //   }
    // },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of the project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project",
    choices: ["MIT", "Mozilla", "ISC"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFileSync(
      path.join(process.cwd(), "NewReadME.md"),
      readmeGenerator(answers)
    );
    // readmeGenerator(answers);
  });
}

// Function call to initialize app
init();
