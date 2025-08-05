import { IProduct } from './IProduct';

export interface ITransportCalculator {
  calculerFraisTransport(poids: number, distance: number): number;
  calculerFraisProduit(product: IProduct, distance: number): number;
}