class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("'name' must be a non-empty string");
            }
        if (isNaN(id)) {
            throw new Error("'id' must be a number");
            }
        if (!email.includes("@")) {
            throw new Error("'email' must be an email address");
            }

        this.name = name;
        this.id = id;
        this.email = email;
    }
  
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
  }
  
  module.exports = Employee;
  
 // const emp = new Employee("a", 1, "@")
  //console.log(emp)
