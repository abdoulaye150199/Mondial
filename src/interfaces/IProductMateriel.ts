import { IProduct } from './IProduct';

export interface IProductMateriel extends IProduct {
  readonly type: 'materiel';
  readonly isFragile: boolean;
  readonly isCassable: boolean;
}