import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async signIn(
    params: Prisma.UsersCreateInput,
  ): Promise<{ access_token: string }> {
    const user = await this.prisma.users.findUnique({
      where: { email: params.email },
    });
    const matcher = await bcrypt.compare(params.password, user.password);
    if (!matcher) {
      throw new UnauthorizedException('Wrong Password!');
    }
    const payload = { sub: user.id_user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
