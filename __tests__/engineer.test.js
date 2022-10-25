const Engineer = require('../lib/engineer');
 
describe('Engineer', () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github username if provided valid arguments", () => {
          const engineer = new Engineer("engineer's name", 1, "engineer@email", "engineer's username");
    
          expect(engineer.name).toEqual("engineer's name");
          expect(engineer.id).toEqual(1);
          expect(engineer.email).toEqual("engineer@email");
          expect(engineer.github).toEqual("engineer's username");
        });

        it("should throw an error if not provided a github username", () => {
          const engineer = () => new Engineer("engineer's name", 1, "engineer@email");
          const err = new Error("'github' must be a non-empty string");
    
          expect(engineer).toThrowError(err);
        });
    
        it("should throw an error if 'github' is not a string", () => {
          const engineer = () => new Engineer("engineer's name", 1, "engineer@email", 1);
          const err = new Error("'github' must be a non-empty string");
    
          expect(engineer).toThrowError(err);
        });
        
        it("the prototype methods should return the correct corresponding value", () => {
          const engineer = new Engineer("engineer's name", 1, "engineer@email", "engineer's username");

          expect(engineer.getName()).toEqual("engineer's name");
          expect(engineer.getId()).toEqual(1);
          expect(engineer.getEmail()).toEqual("engineer@email");
          expect(engineer.getRole()).toEqual("Engineer");
          expect(engineer.getGithub()).toEqual("engineer's username");
        });
      });
    });