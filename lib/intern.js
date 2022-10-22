const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        if (typeof school !== "string" || !name.trim().length) {
            throw new Error("'name' must be a non-empty string");
            } 
        this.school = school    
    
    
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;