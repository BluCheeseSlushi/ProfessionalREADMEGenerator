// Picks a badge for the license the uses picked
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
// Provides a link for the license
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
// Creates the license section if the user selected one
function renderLicenseSection(license) {
  if (license != 'Unlicensed') {
    return `## License
This project is licensed with ${renderLicenseLink(license)}
    `
  } else {
    // if no license was selected, the function returns an empty string
    return ``
  }
}

function generateMarkdown(data) {
  const license = data.license
  // Because the email section was optional, data email is pass through an if statement
  if (data.email) {
    // If the user entered an email, then it is added to the page
    global.address = `You can email questions to ${data.email} for more information`;
  } else {
    // otherwise the section is left blank
    global.address = '';
  }
  // The function returns the page template with the user data in the proper sectiopns
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
// Exports the generateMarkdown function to be used by index.js
module.exports = generateMarkdown;
