function renderLicense(license) {
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
  if (license === 'None') {
    return `## No licenses used`
  }
  return ' '
}

function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
${renderLicense(data.license)}
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Test
${data.test}
${renderLicense(data.license)}
${renderLicense(data.license)}
## Questions
${data.git}
${data.email}
`;
}

module.exports = generateMarkdown;
