const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt()[
     {
      type:'input',
      name: 'name',
      message: 'What is your project`s name?'
     },   
     {
        type:'input',
        name: 'description',
        message: 'Please describe your project'
       },   
        {
        type:'input',
        name: 'installation',
        message: 'Please describe any libraries that need to be added in order for your app to work properly'
       },     
       {
        type:'input',
        name: 'Usage',
        message: 'How does your app work?'
       },     
       {
        type:'input',
        name: 'license',
        message: 'What licenses are needed?'
       },    
        {
        type:'input',
        name: 'contributing',
        message: 'Were there any contributors to your project?'
       },     
       {
        type:'input',
        name: 'questions',
        message: 'Please enter a link to your GitHub account'
       },   
       {
         type:'input',
         name: 'questions',
         message: 'Please enter your e-mail address'
        }   
    ]

    