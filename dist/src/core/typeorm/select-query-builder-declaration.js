"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SelectQueryBuilder_1 = require("typeorm/query-builder/SelectQueryBuilder");
const ORDER_BY_PREFIX = 'orderBy';
const ALIAS_DELIMETER = '___';
const _util = {
    getOrderByProperty(value) {
        if (!value) {
            throw new Error('orderKey value not found.');
        }
        value = value.replace(ORDER_BY_PREFIX, '');
        value = _util.firstLetterToLowerCase(value);
        return value;
    },
    firstLetterToLowerCase(value) {
        if (!value) {
            return value;
        }
        value = value.substring(0, 1).toLowerCase() + value.substring(1);
        return value;
    },
    joinAliasMapper(joinTableAliases, alias) {
        joinTableAliases.some(joinTableAlias => {
            const regExp = new RegExp(joinTableAlias, 'i');
            if (alias.match(regExp)) {
                alias = joinTableAlias;
                return true;
            }
            return false;
        });
        return alias;
    },
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.AddDateRange = function (START_DATE, END_DATE) {
    if (START_DATE && END_DATE) {
        this.andWhere(`${this.alias}.started >= :START_DATE AND ${this.alias}.ended <= :END_DATE`, {
            START_DATE,
            END_DATE,
        });
    }
    return this;
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.AndWhereBetweenDate = function (DATE) {
    if (DATE) {
        this.andWhere(`${this.alias}.started <= :DATE AND ${this.alias}.ended >= :DATE`, { DATE });
    }
    return this;
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.IN = function (columnName, values) {
    if (values.length > 0)
        this.andWhere(`${this.alias}.${columnName} IN (:...values)`, { values });
    return this;
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.IsDisplay = function (isDisplay) {
    if (isDisplay !== undefined && isDisplay !== null)
        this.andWhere(`${this.alias}.is_display = :isDisplay`, { isDisplay });
    return this;
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.CustomInnerJoinAndSelect = function (RELATIONS) {
    return RELATIONS.reduce((acc, item) => {
        acc = acc.innerJoinAndSelect(`${this.alias}.${item}`, `${item}`);
        return acc;
    }, this);
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.AndWhereEqual = function (alias, property, value) {
    if (value !== undefined) {
        this.andWhere(`${alias}.${property} = :${alias}${ALIAS_DELIMETER}${property}`, {
            [`${alias}${ALIAS_DELIMETER}${property}`]: value,
        });
    }
    return this;
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.AndWhereLike = function (alias, property, value) {
    if (value !== undefined) {
        this.andWhere(`${alias}.${property} LIKE :${alias}${ALIAS_DELIMETER}${property}`, {
            [`${alias}${ALIAS_DELIMETER}${property}`]: `%${value}%`,
        });
    }
    return this;
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.AndWhereIn = function (alias, property, values) {
    if (values && values.length > 0) {
        this.andWhere(`${alias}.${property} IN (:...${alias}${ALIAS_DELIMETER}${property})`, {
            [`${alias}${ALIAS_DELIMETER}${property}`]: values,
        });
    }
    return this;
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.WhereAndOrder = function (excludedRequestDto) {
    if (!excludedRequestDto)
        return this;
    const joinTableAliases = this.expressionMap.joinAttributes.map(attr => attr.alias && attr.alias.type === 'join' && attr.alias.name);
    const parameters = this.getParameters();
    const where = {};
    Object.keys(excludedRequestDto)
        .filter(k => excludedRequestDto[k] !== undefined)
        .forEach(k => {
        if (k.indexOf(ORDER_BY_PREFIX) === 0) {
            let prop = _util.getOrderByProperty(k);
            prop = `${this.alias}.${prop}`;
            this.addOrderBy(prop, excludedRequestDto[k]);
            return;
        }
        if (typeof excludedRequestDto[k] === 'object') {
            Object.keys(excludedRequestDto[k]).forEach(property => {
                if (parameters[`${k}${ALIAS_DELIMETER}${property}`]) {
                    delete excludedRequestDto[k][property];
                }
            });
        }
        else if (parameters[`${this.alias}${ALIAS_DELIMETER}${k}`]) {
            return;
        }
        where[k] = excludedRequestDto[k];
    });
    console.log('--- SelectQueryBuilder.WhereAndOrder', where);
    Object.keys(where).forEach(k => {
        let whereQuery;
        let whereParam;
        if (typeof where[k] === 'object' && !Array.isArray(where[k])) {
            const alias = _util.joinAliasMapper(joinTableAliases, k);
            Object.keys(where[k]).forEach(property => {
                const param = `${alias}${ALIAS_DELIMETER}${property}`;
                whereParam = { [param]: where[k][property] };
                if (Array.isArray(where[k][property])) {
                    whereQuery = `${alias}.${property} in (:${param})`;
                }
                else {
                    whereQuery = `${alias}.${property} = :${param}`;
                }
                this.andWhere(whereQuery, whereParam);
            });
        }
        else {
            whereParam = { [k]: where[k] };
            if (Array.isArray(where[k])) {
                whereQuery = `${this.alias}.${k} in (:${k})`;
            }
            else {
                whereQuery = `${this.alias}.${k} = :${k}`;
            }
            this.andWhere(whereQuery, whereParam);
        }
    });
    return this;
};
SelectQueryBuilder_1.SelectQueryBuilder.prototype.Paginate = function (pagination) {
    this.skip(pagination.skip).take(pagination.take);
    return this;
};
//# sourceMappingURL=select-query-builder-declaration.js.map