// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-silver.svg)`
  }
  return ' '
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
  return '[License: MIT](https://opensource.org/licenses/MIT)'
  }
  if (license === 'Apache License 2.0') {
    return '[License: Apache](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '[License: GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)'
  }
  if (license === 'BSD 3-Clause NEW or REVISED License') {
    return '[License: BSD 3-Clause NEW or REVISED License](https://opensource.org/licenses/BSD-3-Clause)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License uses the ${license} license`
  }
  return ' '
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
${renderLicenseLink(data.license)}
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Test
${data.test}
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
## Questions
${data.git}
${data.email}
`;
}

module.exports = generateMarkdown;
