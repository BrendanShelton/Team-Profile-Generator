const Manager = require('../lib/manager');
 
describe('Manager', () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
          const manager = new Manager("manager's name", 1, "manager@email", 1);
    
          expect(manager.name).toEqual("manager's name");
          expect(manager.id).toEqual(1);
          expect(manager.email).toEqual("manager@email");
          expect(manager.office).toEqual(1);
        });

        it("should throw an error if not provided an office number", () => {
          const manager = () => new Manager("manager's name", 1, "manager@email");
          const err = new Error("'office' must be a number");
    
          expect(manager).toThrowError(err);
        });
    
        it("should throw an error if 'office' is not a string", () => {
          const manager = () => new Manager("manager's name", 1, "manager@email", "office number");
          const err = new Error("'office' must be a number");
    
          expect(manager).toThrowError(err);
        });
      });
    });