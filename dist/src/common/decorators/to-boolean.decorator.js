"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
exports.ToBoolean = () => {
    return class_transformer_1.Transform((value) => {
        if (value === 'true' || value === true || value === 1 || value === '1')
            return true;
        else if (value === 'false' || value === false || value === 0 || value === '0')
            return false;
        return undefined;
    });
};
//# sourceMappingURL=to-boolean.decorator.js.map