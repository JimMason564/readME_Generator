const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project`s title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please describe any libraries that need to be added in order for your app to work properly",
  },
  {
    type: "input",
    name: "usage",
    message: "How does your app work?",
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: "input",
    name: "contributing",
    message: "Were there any contributors to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "What tests were run to validate this project?",
  },
  {
    type: "input",
    name: "git",
    message: "Please enter a link to your GitHub account",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your e-mail address",
  },
];
function writeToFile(fileName, data) {
  return fs.writeFileSync(`${process.cwd()}/${fileName}`, data);
}

function init() {
  console.log("Hello");
  inquirer.prompt(questions).then((res) => {
    console.log("Creating");
    writeToFile("test.md", generateMarkdown(res));
  });
}

init();
