"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const base_dto_1 = require("./base.dto");
class BaseEntity extends typeorm_1.BaseEntity {
    constructor(partial) {
        super();
        partial &&
            Object.keys(partial).map(key => {
                if (key !== 'id' && partial[key] !== undefined) {
                    this[key] = partial[key];
                }
            });
    }
    set(partial, deep = false) {
        partial &&
            Object.keys(partial).map(key => {
                if (partial[key] !== undefined) {
                    if (deep) {
                        this[key] = partial[key];
                    }
                    else {
                        if (!(partial[key] instanceof base_dto_1.BaseDto)) {
                            this[key] = partial[key];
                        }
                    }
                }
            });
        return this;
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base.entity.js.map