import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @Get()
  findAll(){
    return this.userService.findAll();
  }

  @Get(':id')
  getUser(@Param('id',ParseIntPipe) id: number){
    return this.userService.findOne(id)
  }

  @Get(':id/orders')
  getOrdersByUser(@Param('id',ParseIntPipe) id: number){
    return this.userService.getOrdersByUser(id)
  }

}
