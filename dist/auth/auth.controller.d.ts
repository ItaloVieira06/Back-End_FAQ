import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Prisma.UsersCreateInput): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
