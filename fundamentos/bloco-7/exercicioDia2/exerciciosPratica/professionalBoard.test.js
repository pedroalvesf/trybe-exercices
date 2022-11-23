const searchEmployee = require('./professionalBoard');

describe('Testing searchEmployee', () => {
    it('Testing with id: "4678-2" and "specialities"' , () => {
        expect(searchEmployee("4678-2", "specialities")).toEqual(['Backend']);
    })
    it('Testing with id: "4678-2" and "firstName"' , () => {
        expect(searchEmployee("4678-2", "specialities")).toEqual(['Paul']);
    })
});