const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        if (isNaN(office)) {
            throw new Error("'office' must be a number");
            } 
        this.office = office    
    
    
    }
    getOffice() {
        return this.office
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;