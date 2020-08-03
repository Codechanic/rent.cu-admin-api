import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from '../services/local.strategy';
import { JwtStrategy } from '../services/jwt.strategy';
import { jwtConstants } from './constants';

/**
 * Authentication module
 * @description Holds the registration of Passport strategies
 */
@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    })],
  exports: [
    AuthService,
  ],

})
export class AuthModule {
}
