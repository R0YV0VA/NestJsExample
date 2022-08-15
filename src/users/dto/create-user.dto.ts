import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'google@gmail.com', description: 'Email adress'})
    readonly email: string;
    @ApiProperty({example: '1234567890', description: 'Your password'})
    readonly password: string;
}