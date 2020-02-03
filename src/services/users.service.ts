import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from '../model/user';

/**
 * User handling service
 */
@Injectable()
export class UsersService {

  /**
   * Service constructor
   * @param userRepository Instance of TypeORM's repository service
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {
  }

  /**
   * Find all users
   */
  async findAll() {
    return await this.userRepository.find();
  }

  /**
   * Find user by its username
   * @param username User's username
   */
  async findOne(username: string): Promise<User> {
    return await this.userRepository.findOne({ where: { username }});
  }

  /**
   * Create a user
   * @param user New user data
   */
  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  /**
   * Find a user by its id
   * @param id User's id
   */
  async findById(id: any): Promise<User> {
    return await this.userRepository.findOne({where: {id}, select: ['id', 'username', 'email', 'name']});
  }

  /**
   * Return a userby its token
   * @param token
   */
  async findByToken(token: string): Promise<User> {
    return await this.userRepository.findOne({ where: { refreshToken: token }});
  }
}
