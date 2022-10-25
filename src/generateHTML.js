//returns the HTML for the webpage displaying the team members' information
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
    </html>`;
}

//loops through the team array and adds the HTML for cards for each team member to a string which is returned
function generateMemberCards(team) {
    cards = ""
    team.forEach (member => {
        if (member.getRole() === "Manager") {
            const { name, id, email, office } = member
            cards += `<section>
            <h2>${name}</h2>
            <h3>Manager</h3>
            <p>ID: ${id}</p>
            <p>Email: ${email}</p>
            <p>Office number: ${office}</p>
            </section>`
        } else if (member.getRole() === "Engineer") {
            const { name, id, email, github } = member
            cards += `<section>
            <h2>${name}</h2>
            <h3>Engineer</h3>
            <p>ID: ${id}</p>
            <p>Email: ${email}</p>
            <p>Github: <a href="https://github.com/${github}">${github}</a></p>
            </section>`
        } else {
            const { name, id, email, school } = member
            cards += `<section>
            <h2>${name}</h2>
            <h3>Intern</h3>
            <p>ID: ${id}</p>
            <p>Email: ${email}</p>
            <p>School: ${school}</p>
            </section>`
        }
        
    })

    return cards;
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