const generateTeam = team => {
    console.log("team from index.js", team)

    // in here you will have three different functions to generate your manager, engineer, and intern

    // youre going to write some logic that filters through each team member depending on their getRole() method which will return their respective role...
    // and you will send them to that specific function to generate them

    // split the team by filtering them via getRole()
    // map over everyone that passes that filter and push them to their respective function
    // after everyone is rendered youre going to call you generateTeam() function in an html template below as a module.exports


    const buildManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <p class="card-title">${manager.getName()}</p>
          <p class="card-text">Id: ${manager.getID()}</p>
          <p class="card-text"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
          <p class="card-text">${manager.getOfficeNumber()}</p>
        </div>
      </div> `
    }

    const buildEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Engineer</h5>
          <p class="card-text">Id: ${engineer.getName()}</p>
          <p class="card-text">Id: ${engineer.getID()}</p>
          <p class="card-text"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
          <p class="card-text">Github: ${engineer.getGithub()}</p>
        </div>
      </div> `
    }

    const buildIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <p class="card-text">Id: ${intern.getName()}</p>
          <p class="card-text">Id: ${intern.getID()}</p>
          <p class="card-text"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
          <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
      </div>  `
    }

    const toHtml = [];

    toHtml.push(team.filter(employee => employee.getRole() === "Manager").map(manager => buildManager(manager)))

    toHtml.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => buildEngineer(engineer)).join(""))

    toHtml.push(team.filter(employee => employee.getRole() === "Intern").map(intern => buildIntern(intern)).join(""))

    return toHtml.join("")
}


module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/flatly/bootstrap.min.css" />
        <title>Your Team</title>
    </head>
    <body>
    <div>
        <div class='row'>
    ${generateTeam(team)}
        </div>
    </div>

        
    </body>  `
}