const searchEmployee = require('./professionalBoard');

describe('Testing searchEmployee', () => {
    it('Testing with id: "4678-2" and "specialities"' , () => {
        expect(searchEmployee("4678-2", "specialities")).toEqual(['Backend']);
    });
    it('Testing with id: "4678-2" and "firstName"' , () => {
        expect(searchEmployee("4678-2", "firstName")).toEqual('Paul');
    });
    it('Testing with id: "9852-2-2" and "firstName"', () => {
        expect(searchEmployee("9852-2-2", "firstName")).toEqual('Jeff');
    });
    it('Testin with id: "1256-4" and "specialities"', () => {
        expect(searchEmployee("1256-4", "specialities")).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
    });
    it('Testing error loop', () => {
        expect(() => {searchEmployee("1256-4", "tree")}).toThrow(/indisponivel/);
    });
    it('Testing error loop', () => {
        expect(() => {searchEmployee("1256111", "specialities")}).toThrow(/identificada/);
    });
});