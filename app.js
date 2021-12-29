const profileDataArgs = process.argv.slice(2, process.argv.length);
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const [name, github] = profileDataArgs;




fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err)  throw new Error(err);

    console.log("Portfolio complete! Check out index.html to see the output!");
});

// console.log(name, github); (TEST)
// console.log(generatePage(name, github));
// console.log(generatePage());
// console.log(profileDataArgs); (12.28.2021)
// const printProfileData = (profileDataArr) => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);