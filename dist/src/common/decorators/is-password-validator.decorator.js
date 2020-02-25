"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
exports.IsPassword = (validationOptions) => {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'isPassword',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: Object.assign({ message: 'Password does not comply with password security policy' }, validationOptions),
            validator: {
                validate(value) {
                    if (!value) {
                        return false;
                    }
                    const regexIt = value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&+_()^%=;?`~-])[A-Za-z\d$@$!%*#?&+_()^%=;?`~-]{6,}$/);
                    if (!regexIt)
                        return false;
                    return true;
                },
            },
        });
    };
};
//# sourceMappingURL=is-password-validator.decorator.js.map