import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'evantype@gmail.com', description: 'email'})
    readonly email: string;

    @ApiProperty({example: 'password', description: 'password'})
    readonly password: string;
}