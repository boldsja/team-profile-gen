const inquirer = require("inquirer");


const askJob = () => {
inquirer.prompt(
  {
    name: "job",
    type: "list",
    choices: ["Intern","Employee", "Engineer", "Manager"],
    message:"Choose Job Title"
  }
)}


//initate program
askJob();