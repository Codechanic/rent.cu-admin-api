import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../services/local.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../services/jwt.strategy';

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
