const { Address } = require('../Address');
const { Customer } = require('../Customer');

describe('Customer', () => {
    it('should create customer', () => {
        const firstName = 'First';
        const lastName = 'Last';
        const addresses = [new Address('', '', 1, '', '', '', '')];
        const phoneNumber = '+12002000000';
        const email = 'a@a.a';
        const notes = ['Text'];
        const totalPurchasesAmount = 1;
        const lastPurchaseDate = new Date('2020-1-1');

        const customer = new Customer(
            firstName,
            lastName,
            addresses,
            phoneNumber,
            email,
            notes,
            totalPurchasesAmount,
            lastPurchaseDate
        );

        expect(customer.firstName).toBe(firstName);
        expect(customer.lastName).toBe(lastName);
        expect(customer.addresses).toBe(addresses);
        expect(customer.phoneNumber).toBe(phoneNumber);
        expect(customer.email).toBe(email);
        expect(customer.notes).toBe(notes);
        expect(customer.totalPurchasesAmount).toBe(totalPurchasesAmount);
        expect(customer.lastPurchaseDate).toBe(lastPurchaseDate);
    });
});
