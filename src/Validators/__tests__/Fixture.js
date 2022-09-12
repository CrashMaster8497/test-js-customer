const { Address } = require('../../Entities/Address');
const { Customer } = require('../../Entities/Customer');

test.skip('skip', () => {});

class Fixture {
    static getDefaultAddress = () => {
        return new Address(
            'Line',
            'Line2',
            1,
            'City',
            '000000',
            'State',
            'United States'
        );
    };

    static getDefaultCustomer = () => {
        return new Customer(
            'First',
            'Last',
            [this.getDefaultAddress()],
            '+12002000000',
            'a@a.a',
            ['Text'],
            1,
            new Date('2020-1-1')
        );
    };
}

module.exports = {
    Fixture,
};
