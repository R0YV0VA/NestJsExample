import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @ApiOperation({summary: 'User login'})
    @Post('/login')
    login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto)
    }

    @ApiOperation({summary: 'User registration'})
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto)
    }
}
