import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { SignUp } from './dto/signup.auth.dto';
import { SignIn } from './dto/signin.auth.dto';
import { SuccessResponse } from 'src/response/ApiResponse';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService)  {}
  @Post('/signup')
  create(@Body() createUserDto: SignUp):Promise<void>|string{
    return this.usersService.create(createUserDto)
  }
  @Post('/signin')
  async signin(@Body() createUserDto: SignIn):Promise<SuccessResponse>{
    const data = await this.authService.signin(createUserDto);
    const res = new SuccessResponse(200,'success',data)
    return res
  }
}
