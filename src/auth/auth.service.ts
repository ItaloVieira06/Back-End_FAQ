import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Users } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signIn(username: string, pass: string): Promise<Users> {
    const user = await this.usersService.searchOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
