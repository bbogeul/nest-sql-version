"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    exclude(property) {
        if (property) {
            if (typeof property === 'object') {
                Object.keys(property).forEach(k => {
                    if (typeof this[k] === 'object') {
                        Object.keys(this[k]).forEach(k2 => {
                            delete this[k][k2];
                        });
                    }
                });
            }
            else {
                delete this[property];
            }
        }
        return this;
    }
    setAttribute(partial, deep = false) {
        partial &&
            Object.keys(partial).map(key => {
                if (partial[key] !== undefined) {
                    if (deep) {
                        this[key] = partial[key];
                    }
                    else {
                        if (!(partial[key] instanceof BaseDto)) {
                            this[key] = partial[key];
                        }
                    }
                }
            });
        return this;
    }
    clone() {
        const type = Object.create(this);
        return Object.assign(type, this);
    }
}
exports.BaseDto = BaseDto;
//# sourceMappingURL=base.dto.js.map