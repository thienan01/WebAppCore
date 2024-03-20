import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { SignIn } from './dto/signin.auth.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/users/user.repository';
import { SignInResponse } from './dto/signin.response.dto';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    getAccessToken(payload: User): string {
        return this.jwtService.sign(payload)
    }

    async signin(signInInfo: SignIn): Promise<SignInResponse> {
        if (!signInInfo) throw new BadRequestException()

        const user: User = await this.userRepository.getByUserName(signInInfo.username)
        const accessToken = this.getAccessToken(user);

        if (user && await bcrypt.compareSync(signInInfo.password, user.password)){
            const accessToken = this.getAccessToken(user);
            return new SignInResponse(user.id,user.username,accessToken)
        }
        else
            throw new UnauthorizedException()
    }
}
