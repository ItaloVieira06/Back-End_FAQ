import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma.service';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    signIn(params: Prisma.UsersCreateInput): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshToken(refreshToken: any): Promise<{
        access_token: string;
    }>;
}
