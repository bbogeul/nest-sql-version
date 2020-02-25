"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
exports.Default = (defaultValue) => {
    return class_transformer_1.Transform((target) => target || defaultValue);
};
//# sourceMappingURL=default.decorator.js.map