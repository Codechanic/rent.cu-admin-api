import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Comment } from '../model/comment';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {

  }

  /**
   * Find all comments
   */
  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  /**
   * Find comment by id
   * @param id
   */
  async find(id): Promise<Comment> {
    return this.commentRepository.findOne(id, {relations: ['homestay']});
  }

  /**
   * Find comments by house
   * @param houseId
   * @param take
   * @param skip
   */
  async findByHouse(houseId, take, skip): Promise<Comment[]> {
    return this.commentRepository.find({
      where: { homestay: houseId },
      select: ['id', 'name', 'nick', 'text', 'email', 'rating', 'enabled'],
      take,
      skip,
    });
  }

  /**
   * Create a comment
   * @param comment
   */
  async create(comment): Promise<Comment> {
    return this.commentRepository.save(comment);
  }

  /**
   * Update a comment
   * @param comment
   */
  async update(comment): Promise<UpdateResult> {
    return this.commentRepository.update(comment.id, comment);
  }

  /**
   * delete a comment
   * @param id
   */
  async delete(id): Promise<DeleteResult> {
    return this.commentRepository.delete(id);
  }

  /**
   * count comments
   */
  async count(): Promise<number> {
    return this.commentRepository.count();
  }
}
