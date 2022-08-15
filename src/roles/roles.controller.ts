import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RolesService } from './roles.service';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Role creation'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto){
        return this.roleService.createRole(roleDto)
    }

    @ApiOperation({summary: 'Get role by value'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:value')
    getAll(@Param('value') value: string){
        return this.roleService.getRoleByValue(value)
    }
}
