//const Engineer = require("../lib/engineer")

function generateHTML(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <h1>My Team</h1>
        <main>
            ${generateMemberCards(team)}
        </main>
    </body>
    </html>`
}

function generateMemberCards(team) {
    cards = ""
    team.forEach (member => {
        if (member.constructor.name === "Manager") {
            const { name, ID, email, office } = member
            cards += `<section>
            <h2>${name}</h2>
            <h3>Manager</h3>
            <p>ID: ${ID}</p>
            <p>Email: ${email}</p>
            <p>Office number: ${office}</p>
            </section>`
        } else if (member.constructor.name === "Engineer") {
            const { name, ID, email, github } = member
            cards += `<section>
            <h2>${name}</h2>
            <h3>Engineer</h3>
            <p>ID: ${ID}</p>
            <p>Email: ${email}</p>
            <p>Github: <a href="https://github.com/${github}">username</a></p>
            </section>`
        } else {
            const { name, ID, email, school } = member
            cards += `<section>
            <h2>${name}</h2>
            <h3>Engineer</h3>
            <p>ID: ${ID}</p>
            <p>Email: ${email}</p>
            <p>School: ${school}</p>
            </section>`
        }
        
    })

    return cards
}
/*`<section>
<h2>name</h2>
<h3>role</h3>
<p>ID: </p>
<p>Email:</p>
<p>Office number: </p>
</section>`

`<section>
<h2></h2>
<h3></h3>
<p>ID: </p>
<p>Email:</p>
<p>Github: <a href="https://github.com/">username</a></p>
</section>`

`<section>
<h2></h2>
<h3></h3>
<p>ID: </p>
<p>Email:</p>
<p>School: </p>
</section>`*/

module.exports = generateHTML