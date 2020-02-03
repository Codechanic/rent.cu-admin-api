import {Body, Controller, Delete, Get, Logger, Param, Post, Put, Query, Req, UseGuards} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { CommentService } from '../services/comment.service';
import { Comment } from '../model/comment';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {

  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  async find(@Param('id') id): Promise<any> {
    return this.commentService.find(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/count')
  async count(): Promise<any> {
    return this.commentService.count();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('house/:houseId')
  async findByHouse(@Param('houseId') houseId, @Query() query): Promise<Comment[]> {
    return this.commentService.findByHouse(houseId, query.take, query.skip);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() comment: Comment): Promise<any> {
    return this.commentService.create(comment);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/:id')
  async update(@Param('id') id, @Body() comment: Comment): Promise<any> {
    return this.commentService.update(comment);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.commentService.delete(id);
  }

}
