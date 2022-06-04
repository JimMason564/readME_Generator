const inquire = require('inquirer');
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt()[
     {
      type:'input',
      name: 'name',
      message: 'What is your project`s name?'
     }   
    ]