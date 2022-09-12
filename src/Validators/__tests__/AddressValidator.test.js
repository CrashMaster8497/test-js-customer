const { Address } = require('../../Entities/Address');
const { AddressValidator } = require('../AddressValidator');

const getDefaultAddress = () =>
    new Address('Line', 'Line2', 1, 'City', '000000', 'State', 'United States');

describe('AddressValidator', () => {
    const emptyAddressLineCases = [undefined, ''];
    test.each(emptyAddressLineCases)(
        'should return Address Line required for %p',
        (addressLine) => {
            let address = getDefaultAddress();
            address.addressLine = addressLine;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('Address Line required');
        }
    );

    const longAddressLineCases = ['a'.repeat(101)];
    test.each(longAddressLineCases)(
        'should return Address Line too long for %p',
        (addressLine) => {
            let address = getDefaultAddress();
            address.addressLine = addressLine;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('Address Line too long');
        }
    );

    const correctAddressLineCases = ['a'.repeat(1), 'a'.repeat(100)];
    test.each(correctAddressLineCases)(
        'should not return Address Line error for %p',
        (addressLine) => {
            let address = getDefaultAddress();
            address.addressLine = addressLine;

            const errors = AddressValidator.validate(address);

            expect(errors).not.toContain('Address Line required');
            expect(errors).not.toContain('Address Line too long');
        }
    );

    const longAddressLine2Cases = ['a'.repeat(101)];
    test.each(longAddressLine2Cases)(
        'should return Address Line 2 too long for %p',
        (addressLine2) => {
            let address = getDefaultAddress();
            address.addressLine2 = addressLine2;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('Address Line 2 too long');
        }
    );

    const correctAddressLine2Cases = [
        undefined,
        '',
        'a'.repeat(1),
        'a'.repeat(100),
    ];
    test.each(correctAddressLine2Cases)(
        'should not return Address Line 2 error for %p',
        (addressLine2) => {
            let address = getDefaultAddress();
            address.addressLine2 = addressLine2;

            const errors = AddressValidator.validate(address);

            expect(errors).not.toContain('Address Line 2 too long');
        }
    );

    const incorrectAddressTypeCases = [-1, 0, 3];
    test.each(incorrectAddressTypeCases)(
        'should return Address Type incorrect for %p',
        (addressType) => {
            let address = getDefaultAddress();
            address.addressType = addressType;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('Address Type incorrect');
        }
    );

    const correctAddressTypeCases = [1, 2];
    test.each(correctAddressTypeCases)(
        'should not return Address Type error for %p',
        (addressType) => {
            let address = getDefaultAddress();
            address.addressType = addressType;

            const errors = AddressValidator.validate(address);

            expect(errors).not.toContain('Address Type incorrect');
        }
    );

    const emptyCityCases = [undefined, ''];
    test.each(emptyCityCases)('should return City required for %p', (city) => {
        let address = getDefaultAddress();
        address.city = city;

        const errors = AddressValidator.validate(address);

        expect(errors).toContain('City required');
    });

    const longCityCases = ['a'.repeat(51)];
    test.each(longCityCases)('should return City too long for %p', (city) => {
        let address = getDefaultAddress();
        address.city = city;

        const errors = AddressValidator.validate(address);

        expect(errors).toContain('City too long');
    });

    const correctCityCases = ['a'.repeat(1), 'a'.repeat(50)];
    test.each(correctCityCases)(
        'should not return City error for %p',
        (city) => {
            let address = getDefaultAddress();
            address.city = city;

            const errors = AddressValidator.validate(address);

            expect(errors).not.toContain('City required');
            expect(errors).not.toContain('City too long');
        }
    );

    const emptyPostalCodeCases = [undefined, ''];
    test.each(emptyPostalCodeCases)(
        'should return Postal Code required for %p',
        (postalCode) => {
            let address = getDefaultAddress();
            address.postalCode = postalCode;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('Postal Code required');
        }
    );

    const longPostalCodeCases = ['a'.repeat(7)];
    test.each(longPostalCodeCases)(
        'should return Postal Code too long for %p',
        (postalCode) => {
            let address = getDefaultAddress();
            address.postalCode = postalCode;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('Postal Code too long');
        }
    );

    const correctPostalCodeCases = ['a'.repeat(1), 'a'.repeat(6)];
    test.each(correctPostalCodeCases)(
        'should not return Postal Code error for %p',
        (postalCode) => {
            let address = getDefaultAddress();
            address.postalCode = postalCode;

            const errors = AddressValidator.validate(address);

            expect(errors).not.toContain('Postal Code required');
            expect(errors).not.toContain('Postal Code too long');
        }
    );

    const emptyStateCases = [undefined, ''];
    test.each(emptyStateCases)(
        'should return State required for %p',
        (state) => {
            let address = getDefaultAddress();
            address.state = state;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('State required');
        }
    );

    const longStateCases = ['a'.repeat(21)];
    test.each(longStateCases)(
        'should return State too long for %p',
        (state) => {
            let address = getDefaultAddress();
            address.state = state;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('State too long');
        }
    );

    const correctStateCases = ['a'.repeat(1), 'a'.repeat(20)];
    test.each(correctStateCases)(
        'should not return State error for %p',
        (state) => {
            let address = getDefaultAddress();
            address.state = state;

            const errors = AddressValidator.validate(address);

            expect(errors).not.toContain('State required');
            expect(errors).not.toContain('State too long');
        }
    );

    const incorrectCountryCases = [undefined, '', 'Country'];
    test.each(incorrectCountryCases)(
        'should return Country incorrect or unavailable for %p',
        (country) => {
            let address = getDefaultAddress();
            address.country = country;

            const errors = AddressValidator.validate(address);

            expect(errors).toContain('Country incorrect or unavailable');
        }
    );

    const correctCountryCases = ['United States', 'Canada'];
    test.each(correctCountryCases)(
        'should not return Country error for %p',
        (country) => {
            let address = getDefaultAddress();
            address.country = country;

            const errors = AddressValidator.validate(address);

            expect(errors).not.toContain('Country incorrect or unavailable');
        }
    );
});
