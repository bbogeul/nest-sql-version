export class ObjectUtils {

    static toCamel(s) {
      return s.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
          .replace('-', '')
          .replace('_', '');
      });
    };
  
    static isArray(a) {
      return Array.isArray(a);
    };
  
    static isObject(o) {
      return o === Object(o) && !ObjectUtils.isArray(o) && typeof o !== 'function';
    };
  
    static keysToCamel(o) {
      if (ObjectUtils.isObject(o)) {
        const n = {};
  
        Object.keys(o)
          .forEach((k) => {
            n[ObjectUtils.toCamel(k)] = ObjectUtils.keysToCamel(o[k]);
          });
  
        return n;
      } else if (ObjectUtils.isArray(o)) {
        return o.map((i) => {
          return ObjectUtils.keysToCamel(i);
        });
      }
  
      return o;
    };
  }
  