const Employee = require('../lib/employee');
 
describe('Employee', () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
          const employee = new Employee("employee's name", 1, "employee@email");
    
          expect(employee.name).toEqual("employee's name");
          expect(employee.id).toEqual(1);
          expect(employee.email).toEqual("employee@email");
        });
    
        it("should throw an error if provided no arguments", () => {
          const employee = () => new Employee();
          const err = new Error("'name' must be a non-empty string");

          expect(employee).toThrow(err);
        });
    
        it("should throw an error if not provided an id or email", () => {
          const employee = () => new Employee("employee's name", 1);
          const err = new Error("an email address must be provided");

          const employee2 = () => new Employee("employee's name");
          const err2 = new Error("'id' must be a number");
    
          expect(employee).toThrowError(err);
          expect(employee2).toThrowError(err2);
        });
    
        it("should throw an error if 'name' is not a string", () => {
          const employee = () => new Employee(1, 1, "employee@email");
          const err = new Error("'name' must be a non-empty string");
    
          expect(employee).toThrowError(err);
        });
    
        it("should throw an error if 'id' is not a number", () => {
          const employee = () => new Employee("employee's name", "id", "employee@email");
          const err = new Error("'id' must be a number");
    
          expect(employee).toThrowError(err);
        });
    
        it("should throw an error if 'email' does not contain an '@'", () => {
          const employee = () => new Employee("employee's name", 1, "employee's email");
          const err = new Error("'email' must be an email address");
    
          expect(employee).toThrowError(err);
        });
        
        it("the prototype methods should return the correct corresponding value", () => {
          const employee = new Employee("employee's name", 1, "employee@email");

          expect(employee.getName()).toEqual("employee's name");
          expect(employee.getId()).toEqual(1);
          expect(employee.getEmail()).toEqual("employee@email");
          expect(employee.getRole()).toEqual("Employee");
        });
      });
    });