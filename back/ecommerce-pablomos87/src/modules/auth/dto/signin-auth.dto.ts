import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInAuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    constructor(partial: Partial<SignInAuthDto>) {
        Object.assign(this, partial)
      }
}