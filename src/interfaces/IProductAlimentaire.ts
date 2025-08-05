import { IProduct } from './IProduct';

export interface IProductAlimentaire extends IProduct {
  readonly type: 'alimentaire';
}