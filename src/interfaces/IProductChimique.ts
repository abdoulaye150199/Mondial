import { IProduct } from './IProduct';

export interface IProductChimique extends IProduct {
  readonly type: 'chimique';
  readonly degreToxicite: number;
}