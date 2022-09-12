class CustomerValidator {
    static errorMessages = {
        firstNameTooLong: 'First Name too long',
        lastNameRequired: 'Last Name required',
        lastNameTooLong: 'Last Name too long',
        addressRequired: 'At least one Address required',
        phoneNumberWrong: 'Phone Number incorrect',
        emailWrong: 'Email incorrect',
        noteRequired: 'At least one Note required',
        lastPurchaseDateWrong:
            "Last Purchase Date can't be lower than 2020 year",
    };

    static constraints = {
        firstNameMaxLength: 50,
        lastNameMaxLength: 50,
        phoneNumberRegex: /^(\+1|1)?([2-9]\d\d[2-9]\d{6})$/,
        emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        lastPurchaseDateMin: new Date('2020-1-1'),
    };

    static validate(customer) {
        let errors = [];

        if (
            customer.firstName &&
            customer.firstName.length &&
            customer.firstName.length > this.constraints.firstNameMaxLength
        ) {
            errors.push(this.errorMessages.firstNameTooLong);
        }

        if (!customer.lastName) {
            errors.push(this.errorMessages.lastNameRequired);
        }
        if (
            customer.lastName &&
            customer.lastName.length &&
            customer.lastName.length > this.constraints.lastNameMaxLength
        ) {
            errors.push(this.errorMessages.lastNameTooLong);
        }

        if (!customer.addresses || customer.addresses.length == 0) {
            errors.push(this.errorMessages.addressRequired);
        }

        if (
            customer.phoneNumber &&
            !customer.phoneNumber.match(this.constraints.phoneNumberRegex)
        ) {
            errors.push(this.errorMessages.phoneNumberWrong);
        }

        if (
            customer.email &&
            !customer.email.match(this.constraints.emailRegex)
        ) {
            errors.push(this.errorMessages.emailWrong);
        }

        if (!customer.notes || customer.notes.length == 0) {
            errors.push(this.errorMessages.noteRequired);
        }

        if (
            customer.lastPurchaseDate &&
            customer.lastPurchaseDate < this.constraints.lastPurchaseDateMin
        ) {
            errors.push(this.errorMessages.lastPurchaseDateWrong);
        }

        return errors;
    }
}

module.exports = {
    CustomerValidator,
};
