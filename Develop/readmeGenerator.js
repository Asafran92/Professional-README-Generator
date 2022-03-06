const readmeGenerator = (answers) => {
  console.log(answers);

  return `
  
  # ${answers.projectTitle}${getLicense(answers.license)}

  ## Description
  ${answers.description}
  

  ## Table of Contents
  * [Installation](#installation)
  * [Usage Instructions](#Usage-Instructions)
  * [Contribution Guidelines](#Contribution-Guidelines)
  * [Test Instructions](#Test-Instructions)


  ### Installation

  Please follow these instructions:
  ${answers.installation}

  ### Usage Instructions

  Please follow these usage instructions
  ${answers.usage}

  ### Contribution Guidelines

  If you would like to contribute, here's how
  ${answers.contribution}

  ### Test Instructions
  If you would like to test, please follow these steps
  ${answers.test}


  `;
};

const getLicense = (license) => {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
};

module.exports = readmeGenerator;
