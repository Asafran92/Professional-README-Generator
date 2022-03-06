const readmeGenerator = (answers) => {
  console.log(answers);

  return `
  
  # ${answers.projectTitle}

  ## Description
  ${answers.description}
  ${getLicense(answers.license)}

  ## Table of Contents
  * [Installation](#installation)


  ## Installation

  Please follow these instructions:
  ${answers.installation}


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
