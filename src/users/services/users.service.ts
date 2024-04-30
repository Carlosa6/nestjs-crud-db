import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { ProductsService } from 'src/products/services/products.service';

@Injectable()
export class UsersService {
  constructor(private productService: ProductsService) {}

  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'jose peter',
      email: 'jose73@gmail.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    let product = this.users.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException(`User #${id} not found.`);
    }

    return product;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };

    this.users.push(newUser);

    return newUser;
  }

  update(id: number, payload: any) {
    const user = this.findOne(id);

    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = { ...user, ...payload };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    this.users.splice(index, 1);
    return true;
  }

  getOrdersByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productService.findAll(),
    };
  }
}
