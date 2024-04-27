import {
  IsString,
  IsNumber,
  IsUrl,
  IsPositive,
  IsNotEmpty,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { MessageErrorProducts } from 'src/utils/ConstantMessage';

export class CreateProductDTO {
  @IsString({ message: MessageErrorProducts.NAME_STRING })
  @IsNotEmpty({ message: MessageErrorProducts.NAME_NOT_EMPTY })
  readonly name: string;

  @IsString({ message: MessageErrorProducts.DESCRIPTION_NOT_EMPTY })
  readonly description: string;

  @IsNumber()
  @IsPositive({ message: MessageErrorProducts.PRICE_IS_POSITIVE })
  @IsNotEmpty({ message: MessageErrorProducts.PRICE_NOT_EMPTY })
  readonly price: number;

  @IsNumber()
  @IsPositive({ message: MessageErrorProducts.STOCK_IS_POSITIVE })
  @IsNotEmpty({ message: MessageErrorProducts.STOCK_NOT_EMPTY })
  readonly stock: number;

  @IsUrl()
  readonly image: string;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
