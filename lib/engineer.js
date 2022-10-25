const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        if (typeof github !== "string" || !name.trim().length) {
            throw new Error("'github' must be a non-empty string");
            } 
        this.github = github    
    
    
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;

//const eng = new Engineer("a", 9, "@", "g");
//console.log(eng)
