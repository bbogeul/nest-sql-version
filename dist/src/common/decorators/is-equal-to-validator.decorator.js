"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
exports.IsEqualTo = (property, validationOptions) => {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'isEqualTo',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: Object.assign({ message: 'Passwords do not match.' }, validationOptions),
            validator: {
                validate(value, args) {
                    if (!value) {
                        return false;
                    }
                    const [newPasswordAttempt] = args.constraints;
                    const newPassword = args.object[newPasswordAttempt];
                    if (newPassword !== value) {
                        return false;
                    }
                    return true;
                },
            },
        });
    };
};
//# sourceMappingURL=is-equal-to-validator.decorator.js.map