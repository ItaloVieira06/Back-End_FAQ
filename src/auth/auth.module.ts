import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { DatabaseModule } from 'src/database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './role.guard';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5184000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, RolesGuard],
  exports: [AuthService],
})
export class AuthModule {}
