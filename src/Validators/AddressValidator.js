class AddressValidator {
    static errorMessages = {
        addressLineRequired: 'Address Line required',
        addressLineTooLong: 'Address Line too long',
        addressLine2TooLong: 'Address Line 2 too long',
        addressTypeWrong: 'Address Type incorrect',
        cityRequired: 'City required',
        cityTooLong: 'City too long',
        postalCodeRequired: 'Postal Code required',
        postalCodeTooLong: 'Postal Code too long',
        stateRequired: 'State required',
        stateTooLong: 'State too long',
        countryWrong: 'Country incorrect or unavailable',
    };

    static constraints = {
        addressLineMaxLength: 100,
        addressLine2MaxLength: 100,
        addressTypes: { Shipping: 1, Billing: 2 },
        cityMaxLength: 50,
        postalCodeMaxLength: 6,
        stateMaxLength: 20,
        countries: ['United States', 'Canada'],
    };

    static validate = (address) => {
        let errors = [];

        if (!address.addressLine) {
            errors.push(this.errorMessages.addressLineRequired);
        }
        if (
            address.addressLine &&
            address.addressLine.length &&
            address.addressLine.length > this.constraints.addressLineMaxLength
        ) {
            errors.push(this.errorMessages.addressLineTooLong);
        }

        if (
            address.addressLine2 &&
            address.addressLine2.length &&
            address.addressLine2.length > this.constraints.addressLine2MaxLength
        ) {
            errors.push(this.errorMessages.addressLine2TooLong);
        }

        if (
            !Object.values(this.constraints.addressTypes).includes(
                address.addressType
            )
        ) {
            errors.push(this.errorMessages.addressTypeWrong);
        }

        if (!address.city) {
            errors.push(this.errorMessages.cityRequired);
        }
        if (
            address.city &&
            address.city.length &&
            address.city.length > this.constraints.cityMaxLength
        ) {
            errors.push(this.errorMessages.cityTooLong);
        }

        if (!address.postalCode) {
            errors.push(this.errorMessages.postalCodeRequired);
        }
        if (
            address.postalCode &&
            address.postalCode.length &&
            address.postalCode.length > this.constraints.postalCodeMaxLength
        ) {
            errors.push(this.errorMessages.postalCodeTooLong);
        }

        if (!address.state) {
            errors.push(this.errorMessages.stateRequired);
        }
        if (
            address.state &&
            address.state.length &&
            address.state.length > this.constraints.stateMaxLength
        ) {
            errors.push(this.errorMessages.stateTooLong);
        }

        if (!this.constraints.countries.includes(address.country)) {
            errors.push(this.errorMessages.countryWrong);
        }

        return errors;
    };
}

module.exports = {
    AddressValidator,
};
