const { Person } = require('../Person');

describe('Person', () => {
    it('should create person', () => {
        const firstName = 'First';
        const lastName = 'Last';

        const person = new Person(firstName, lastName);

        expect(person.firstName).toBe(firstName);
        expect(person.lastName).toBe(lastName);
    });
});
