const Intern = require('../lib/intern');
 
describe('Intern', () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
          const intern = new Intern("intern's name", 1, "intern@email", "intern's school");
    
          expect(intern.name).toEqual("intern's name");
          expect(intern.id).toEqual(1);
          expect(intern.email).toEqual("intern@email");
          expect(intern.school).toEqual("intern's school");
        });

        it("should throw an error if not provided a school", () => {
          const intern = () => new Intern("intern's name", 1, "intern@email");
          const err = new Error("'school' must be a non-empty string");
    
          expect(intern).toThrowError(err);
        });
    
        it("should throw an error if 'school' is not a string", () => {
          const intern = () => new Intern("intern's name", 1, "intern@email", 1);
          const err = new Error("'school' must be a non-empty string");
    
          expect(intern).toThrowError(err);
        });
      });
    });