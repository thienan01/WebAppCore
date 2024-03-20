import { IsString, MinLength, MaxLength } from "class-validator";

export class SignIn {
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}
