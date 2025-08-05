import { IProduct } from './IProduct';
/**
 * Interface pour le calcul des frais de transport
 */
export interface ITransportCalculator {
    calculerFraisTransport(poids: number, distance: number): number;
    calculerFraisProduit(product: IProduct, distance: number): number;
}
//# sourceMappingURL=ITransportCalculator.d.ts.map