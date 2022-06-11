## ReadMe Generator

## Description

This application generates a professional ReadMe based on inputs a user adds via the command line. Once Inquirer is installed, the user can enter "node index.js" in their VSCode Terminal to start the program. The user will then be prompted to answer questions regarding the name of the project, installation, usage, contribution, test, and questions. The user will be prompted to enter their GitHub account and their e-mail for the questions section. Once the final input is added a markdown will be generated utilizing their answers to create a professional Readme file. An example is contained in this repository titled test.md.

## Technology Used
Node JS

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Github Repo
https://github.com/JimMason564/readME_Generator

## Demonstration

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://drive.google.com/file/d/1T99mUaDYKjWe72cdZsgEjYzbYjwpIBM7/preview))
