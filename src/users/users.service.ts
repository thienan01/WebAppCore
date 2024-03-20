import { BadRequestException, ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config';
import { SignIn } from '../auth/dto/signin.auth.dto';
import { SuccessResponse } from 'src/response/ApiResponse';
@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly  configService: ConfigService
  ) { }
  async create(createUserDto: CreateUserDto): Promise<void> {
    if (createUserDto){
      const saltRound = this.configService.get('SALT_ROUND')
      const salt = await bcrypt.genSalt(Number(saltRound));
      const hashedPassword = await bcrypt.hash(createUserDto.password, salt)
      createUserDto.password = hashedPassword;
      return this.userRepository.createUser(createUserDto);
    }
  }

  async signin(signInInfo:SignIn):Promise<User> {
    if(signInInfo){
      const user:User = await this.userRepository.getByUserName(signInInfo.username)

      if(user && await bcrypt.compareSync(signInInfo.password, user.password))
        return user;
      else
        throw new UnauthorizedException()
    }
  }
}
