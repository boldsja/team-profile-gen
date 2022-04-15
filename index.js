const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const path = require("path");
const fs = require("fs");

const teamArray = [];
const DIST_DIR = path.resolve(__dirname, "dist");
const output_path = path.join(DIST_DIR, "team.html");

const template = require("./src/page-template.js")



function mainMenu() {
  function createManager() {

    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the manager's name?"
      },
      {
        name: "id",
        type: "input",
        message: "What is the manager's ID?"
      },
      {
        name: "email",
        type: "input",
        message: "What is the manager's email?"
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is the manager's office number?"
      },
    ]).then((response) => {
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
      teamArray.push(manager)
      askJob()
    })
  }

  function createEngineer() {

    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the engineer's name?"
      },
      {
        name: "id",
        type: "input",
        message: "What is the engineer's ID?"
      },
      {
        name: "email",
        type: "input",
        message: "What is the engineer's email?"
      },
      {
        name: "github",
        type: "input",
        message: "What is their github username?"
      },
    ]).then((response) => {
      const engineer = new Engineer(response.name, response.id, response.email, response.github)
      teamArray.push(engineer)
      askJob()
    })
  }

  function createIntern() {

    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the intern's name?"
      },
      {
        name: "id",
        type: "input",
        message: "What is the intern's ID?"
      },
      {
        name: "email",
        type: "input",
        message: "What is the intern's email?"
      },
      {
        name: "school",
        type: "input",
        message: "What is the intern's school?"
      },
    ]).then((response) => {
      const intern = new Intern(response.name, response.id, response.email, response.school)
      teamArray.push(intern)
      askJob()
    })
  }

  const askJob = () => {
    inquirer.prompt(
      {
        name: "job",
        type: "list",
        choices: ["Intern", "Engineer", "Manager", "I dont want to add anymore team members"],
        message: "What kind of employee would you like to add?"
      }
    ).then((response) => {
      // if(response.job === "Manager"){
      //   createManager()
      // }
      switch (response.job) {
        case "Engineer":
          createEngineer()
          break;
        case "Manager":
          createManager()
          break;
        case "Intern":
          createIntern()
          break;
        default:
          buildTeam()
      }
    })
  }

  function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(output_path, template(teamArray), 'utf-8')
  }

  createManager();
}

mainMenu();


//initate program
//askJob();

// fs.writeFile('readme-gen.md', data, err => {
//     if (err) {
//       console.error(err)
//       return
//     }
// })