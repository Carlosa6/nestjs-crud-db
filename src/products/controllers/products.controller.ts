import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  // ParseIntPipe
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import {
  CreateProductDTO,
  UpdateProductDTO,
} from 'src/products/dtos/products.dtos';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProductDTO) {
    return this.productService.create(payload);
  }

  @Get('')
  getAllProducts(@Query('limit') limit = 30, @Query('offset') offset = 0) {
    return this.productService.findAll();
  }

  @Get('/filter')
  getproductfilter() {
    return `product filter page`;
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getproductid(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }

  @Get('/filters')
  findAllproductsByFilters(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `El limit de busqueda es ${limit} con un intervalo de salto de ${offset}`;
  }

  @Get('limits')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} with brand ${brand} on offset ${offset}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDTO) {
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
