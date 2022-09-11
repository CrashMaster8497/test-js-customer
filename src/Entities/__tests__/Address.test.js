const { Address } = require('../Address');

describe('Address', () => {
    it('should create address', () => {
        const addressLine = 'Line';
        const addressLine2 = 'Line2';
        const addressType = 1;
        const city = 'City';
        const postalCode = 'Postal';
        const state = 'State';
        const country = 'United States';

        const address = new Address(
            addressLine,
            addressLine2,
            addressType,
            city,
            postalCode,
            state,
            country
        );

        expect(address.addressLine).toBe(addressLine);
        expect(address.addressLine2).toBe(addressLine2);
        expect(address.addressType).toBe(addressType);
        expect(address.city).toBe(city);
        expect(address.postalCode).toBe(postalCode);
        expect(address.state).toBe(state);
        expect(address.country).toBe(country);
    });
});
