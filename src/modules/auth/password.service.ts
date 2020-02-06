import Debug from 'debug';
import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { basename } from 'path';

const debug = Debug(`app:${basename(__dirname)}:${basename(__filename)}`);

const bcryptSaltRounds = 10;

@Injectable()
export class PasswordService {
  /**
   * validate password
   */
  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }

  /**
   * hash password
   * @param password
   */
  async hashPassword(password: string): Promise<string> {
    return hash(password, bcryptSaltRounds);
  }
}
