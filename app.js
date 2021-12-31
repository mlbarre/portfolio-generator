const inquirer = require('inquirer');


// const fs = require('fs'); [12.31.2021]
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));


// fs.writeFile('./index.html', pageHTML, err => {
//     if (err)  throw err;

//     console.log("Portfolio complete! Check out index.html to see the output!");
// });

// console.log(name, github); (TEST)
// console.log(generatePage(name, github));
// console.log(generatePage());
// console.log(profileDataArgs); (12.28.2021)
// const printProfileData = (profileDataArr) => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);

