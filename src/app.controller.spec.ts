import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { ManagerService } from './services/manager.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './model/user';
import { Repository } from 'typeorm';
import { Manager } from './model/manager.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';

describe('AppController', () => {
    let appController: AppController;
    let authService: AuthService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            imports: [JwtModule.register({secret: jwtConstants.secret})],
            providers: [
                AuthService,
                UsersService,
                ManagerService,
                {
                    provide: getRepositoryToken(User),
                    useClass: Repository,
                },
                {
                    provide: getRepositoryToken(Manager),
                    useClass: Repository,
                },
            ],
        }).compile();

        appController = app.get<AppController>(AppController);
        authService = app.get<AuthService>(AuthService);
    });

    it('should register a new User using the AuthService', () => {
        jest.spyOn(authService, 'register');
        const user = new User();
        appController.create(user);
        expect(authService.register).toBeCalledWith(user);
    });

    it('should log the user in using the AuthService', async () => {
      jest.spyOn(authService, 'login');
      const user = new User();
      appController.login({user});
      expect(authService.login).toBeCalledWith(user);
    });
});
