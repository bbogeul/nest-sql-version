import { Transform } from 'class-transformer';

export const ToBoolean = () => {
  return Transform((value: any) => {
    if (value === 'true' || value === true || value === 1 || value === '1') return true;
    else if (value === 'false' || value === false || value === 0 || value === '0') return false;
    return undefined;
  });
};
