import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: number) {
    return `el producto ${productId} pertenece a la categoria ${id}`;
  }
}
