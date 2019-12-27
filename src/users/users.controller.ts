import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from '../services/users.service';
import { User } from '../model/user';

/**
 * User api endpoints
 */
@Controller('user')
export class UsersController {

  /**
   * Controller constructor
   * @param usersService Instance of UsersService
   */
  constructor(private usersService: UsersService) {
  }

  /**
   * Api endpoint to retrieve all users
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /**
   * Api endpoint to retrieve a user by its id
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findById(@Param('id') id): Promise<User> {
    return this.usersService.findById(id);
  }
}
