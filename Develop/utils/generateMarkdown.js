// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'GNU AGPLv3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)';
  } else if (license == 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  } else if (license == 'GNU LGPLv3') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0.en.html)';
  } else if (license == 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)';
  } else if (license == 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
  } else if (license == 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license == 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/users/license.html)';
  }else {
    return '';
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'GNU AGPLv3') {
    return '[GNU AGPLv3 license](https://www.gnu.org/licenses/agpl-3.0.en.html)';
  } else if (license == 'GNU GPLv3') {
    return '[GNU GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  } else if (license == 'GNU LGPLv3') {
    return '[GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.en.html)';
  } else if (license == 'Mozilla Public License 2.0') {
    return '[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)';
  } else if (license == 'Apache License 2.0') {
    return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
  } else if (license == 'MIT License') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else {
    return '[Boost Software License 1.0](https://www.boost.org/users/license.html)';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'Unlicensed') {
    return `
    ## License
    This project is licensed with
    ${renderLicenseLink(license)}
    `
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license
  console.log(data);

  if (data.email) {
    global.address = `You can email questions to ${data.email} for more information`;
  } else {
    global.address = '';
  }
  
  return `
  # ${data.title}
  ${renderLicenseBadge(license)}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [guidelines](#guidelines)
  - [tests](#tests)
  - [Questions](Questions)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.guidelines}

  ## Testing
  ${data.tests}

  ## Questions
  ${data.github}

  https://github.com/${data.github}

  ${global.address}

  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
