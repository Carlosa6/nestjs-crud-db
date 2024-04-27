export enum MessageErrorProducts {
  NAME_STRING = 'El nombre del producto es de tipo texto',
  NAME_NOT_EMPTY = 'El nombre del producto es obligatorio',
  DESCRIPTION_NOT_EMPTY = 'La descripción del producto es obligatorio',
  PRICE_NUMBER = 'El precio debe ser un valor numérico',
  PRICE_IS_POSITIVE = 'El precio debe ser un número mayor a cero',
  PRICE_NOT_EMPTY = 'El precio es obligatorio',
  STOCK_IS_POSITIVE = 'El número de stock del producto debe ser un número mayor a cero',
  STOCK_NOT_EMPTY = 'El número de stock del producto es obligatorio',
  IMAGE_FORMAT_URL = 'La imagen debe contener un formato de URL correcta',
}
