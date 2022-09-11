const { Person } = require('./Person');

class Customer extends Person {
    constructor(
        firstName,
        lastName,
        addresses,
        phoneNumber,
        email,
        notes,
        totalPurchasesAmount,
        lastPurchaseDate
    ) {
        super(firstName, lastName);
        this.addresses = addresses;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.notes = notes;
        this.totalPurchasesAmount = totalPurchasesAmount;
        this.lastPurchaseDate = lastPurchaseDate;
    }
}

module.exports = {
    Customer,
};
