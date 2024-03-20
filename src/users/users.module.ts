import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from './user.repository';
@Module({
  controllers: [UsersController],
  providers: [UsersService,UserRepository,ConfigService],
  imports:[TypeOrmModule.forFeature([UserRepository])],
  exports:[UsersService]
})
export class UsersModule {}
