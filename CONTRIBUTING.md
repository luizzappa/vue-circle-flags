# Contributing to Vue Circle Flags

## Reporting issues

We use the issue tracking system of the GitHub. Please follow these recomendations before openning an issue:

- Search the [issue tracker](https://github.com/luizzappa/vue-circle-flags/isseus) to check if already reported the problem.
- If it does not exist, create a new issue.
- Detail the problem with as much information as possible
- If possible create a test case

## Contributions

Contributions are always welcome. For this, follow these steps:

- Clone the repository and install the packages
- To add new published flags to the [circle-flags repository](https://github.com/HatScripts/circle-flags), add them to the folder `src/assets/flags`. Then add the country code and name to the file `utils/country-names.json` (the country code must be the same as the svg file name). Finally, run the command `node ./utils/addBorderToFlags.js`. This will create the vue files for these flags with the proper settings.
- If a new feature is added, create test cases for it in `test`.
- Then format the code with: `npm run prettier-format` and `npm run lint`
- Open a pull request
