/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/ban-types */
import { BaseEntity as TypeormBaseEntity } from 'typeorm';
import { BaseDto } from './base.dto';

export class BaseEntity<T> extends TypeormBaseEntity {
  // [x: string]: any;

  constructor(partial?: Partial<T>) {
    super();
    partial &&
      Object.keys(partial).map(key => {
        // if (key !== 'id' && this.hasOwnProperty(key)) {
        if (key !== 'id' && partial[key] !== undefined) {
          this[key] = partial[key];
        }
      });
  }

  set(partial: Object, deep: boolean = false): this {
    partial &&
      Object.keys(partial).map(key => {
        // if (key !== 'id' && this.hasOwnProperty(key)) {
        if (partial[key] !== undefined) {
          if (deep) {
            this[key] = partial[key];
          } else {
            if (!(partial[key] instanceof BaseDto)) {
              this[key] = partial[key];
            }
          }
        }
        // }
      });
    return this;
  }
}
