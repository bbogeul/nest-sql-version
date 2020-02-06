import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export const IsEqualTo = (
  property: string,
  validationOptions?: ValidationOptions,
) => {
  return (object: Record<string, any>, propertyName: string) => {
    registerDecorator({
      name: 'isEqualTo',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: {
        message: 'Passwords do not match.',
        ...validationOptions,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!value) {
            return false;
          }
          const [newPasswordAttempt] = args.constraints;
          const newPassword = (args.object as any)[newPasswordAttempt];
          if (newPassword !== value) {
            return false;
          }
          return true;
        },
      },
    });
  };
};
