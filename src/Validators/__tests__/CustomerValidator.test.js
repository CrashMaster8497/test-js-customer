const { CustomerValidator } = require('../CustomerValidator');
const { Fixture } = require('./Fixture');

describe('CustomerValidator', () => {
    const longFirstNameCases = ['a'.repeat(51)];
    test.each(longFirstNameCases)(
        'should return First Name too long for %p',
        (firstName) => {
            let customer = Fixture.getDefaultCustomer();
            customer.firstName = firstName;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toContain('First Name too long');
        }
    );

    const correctFirstNameCases = [
        undefined,
        null,
        '',
        'a'.repeat(1),
        'a'.repeat(50),
    ];
    test.each(correctFirstNameCases)(
        'should return First Name too long for %p',
        (firstName) => {
            let customer = Fixture.getDefaultCustomer();
            customer.firstName = firstName;

            const errors = CustomerValidator.validate(customer);

            expect(errors).not.toContain('First Name too long');
        }
    );

    const emptyLastNameCases = [undefined, null, ''];
    test.each(emptyLastNameCases)(
        'should return Last Name required for %p',
        (lastName) => {
            let customer = Fixture.getDefaultCustomer();
            customer.lastName = lastName;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toContain('Last Name required');
        }
    );

    const longLastNameCases = ['a'.repeat(51)];
    test.each(longLastNameCases)(
        'should return Last Name too long for %p',
        (lastName) => {
            let customer = Fixture.getDefaultCustomer();
            customer.lastName = lastName;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toContain('Last Name too long');
        }
    );

    const correctLastNameCases = ['a'.repeat(1), 'a'.repeat(50)];
    test.each(correctLastNameCases)(
        'should not return Last Name error for %p',
        (lastName) => {
            let customer = Fixture.getDefaultCustomer();
            customer.lastName = lastName;

            const errors = CustomerValidator.validate(customer);

            expect(errors).not.toContain('Last Name required');
            expect(errors).not.toContain('Last Name too long');
        }
    );

    const emptyAddressesCases = [undefined, null, []];
    test.each(emptyAddressesCases)(
        'should return At least one Address required for %p',
        (addresses) => {
            let customer = Fixture.getDefaultCustomer();
            customer.addresses = addresses;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toContain('At least one Address required');
        }
    );

    const correctAddressesCases = [[Fixture.getDefaultAddress()]];
    test.each(correctAddressesCases)(
        'should not return Address error for %p',
        (addresses) => {
            let customer = Fixture.getDefaultCustomer();
            customer.addresses = addresses;

            const errors = CustomerValidator.validate(customer);

            expect(errors).not.toContain('At least one Address required');
        }
    );

    const incorrectPhoneNumberCases = [
        '+02002000000',
        '+11002000000',
        '+12001000000',
        '-12002000000',
        '002000000',
        '+120020000000',
        '+12a02000000',
    ];
    test.each(incorrectPhoneNumberCases)(
        'should return Phone Number incorrect for %p',
        (phoneNumber) => {
            let customer = Fixture.getDefaultCustomer();
            customer.phoneNumber = phoneNumber;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toContain('Phone Number incorrect');
        }
    );

    const correctPhoneNumberCases = [
        undefined,
        null,
        '',
        '+12002000000',
        '12002000000',
        '2002000000',
        '3124567890',
    ];
    test.each(correctPhoneNumberCases)(
        'should not return Phone Number error for %p',
        (phoneNumber) => {
            let customer = Fixture.getDefaultCustomer();
            customer.phoneNumber = phoneNumber;

            const errors = CustomerValidator.validate(customer);

            expect(errors).not.toContain('Phone Number incorrect');
        }
    );

    const incorrectEmailCases = [
        '@a.a',
        'aa.a',
        'a@.a',
        'a@aa',
        'a@a.',
        'a%@a.a',
        'a@a%.a',
        'a@a.a%',
    ];
    test.each(incorrectEmailCases)(
        'should return Email incorrect for %p',
        (email) => {
            let customer = Fixture.getDefaultCustomer();
            customer.email = email;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toContain('Email incorrect');
        }
    );

    const correctEmailCases = [
        undefined,
        null,
        '',
        'a@a.a',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-._@a.a',
        'a@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.a',
        'a@a.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-',
    ];
    test.each(correctEmailCases)(
        'should not return Email error for %p',
        (email) => {
            let customer = Fixture.getDefaultCustomer();
            customer.email = email;

            const errors = CustomerValidator.validate(customer);

            expect(errors).not.toContain('Email incorrect');
        }
    );

    const emptyNotesCases = [undefined, null, []];
    test.each(emptyNotesCases)(
        'should return At least one Note required for %p',
        (notes) => {
            let customer = Fixture.getDefaultCustomer();
            customer.notes = notes;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toContain('At least one Note required');
        }
    );

    const correctNotesCases = [['Text']];
    test.each(correctNotesCases)(
        'should not return Note error for %p',
        (notes) => {
            let customer = Fixture.getDefaultCustomer();
            customer.notes = notes;

            const errors = CustomerValidator.validate(customer);

            expect(errors).not.toContain('At least one Note required');
        }
    );

    const correctTotalPurchasesAmountCases = [undefined, null, -1, 0, 1, 0.5];
    test.each(correctTotalPurchasesAmountCases)(
        'should not return any errors for %p',
        (totalPurchasesAmount) => {
            let customer = Fixture.getDefaultCustomer();
            customer.totalPurchasesAmount = totalPurchasesAmount;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toEqual([]);
        }
    );

    const incorrectLastPurchaseDateCases = [new Date('2019-12-31')];
    test.each(incorrectLastPurchaseDateCases)(
        "should return Last Purchase Date can't be lower than 2020 year for %p",
        (lastPurchaseDate) => {
            let customer = Fixture.getDefaultCustomer();
            customer.lastPurchaseDate = lastPurchaseDate;

            const errors = CustomerValidator.validate(customer);

            expect(errors).toContain(
                "Last Purchase Date can't be lower than 2020 year"
            );
        }
    );

    const correctLastPurchaseDateCases = [
        undefined,
        null,
        new Date('2020-1-1'),
        new Date('2022-09-12'),
    ];
    test.each(correctLastPurchaseDateCases)(
        'should not return Last Purchase Date error for %p',
        (lastPurchaseDate) => {
            let customer = Fixture.getDefaultCustomer();
            customer.lastPurchaseDate = lastPurchaseDate;

            const errors = CustomerValidator.validate(customer);

            expect(errors).not.toContain(
                "Last Purchase Date can't be lower than 2020 year"
            );
        }
    );
});
