import { ITransportCalculator } from '../interfaces/ITransportCalculator';
import { IProduct } from '../interfaces/IProduct';
/**
 * Service de calcul des frais de transport
 */
export declare class TransportCalculator implements ITransportCalculator {
    private readonly typeTransport;
    private readonly tarifBase;
    constructor(typeTransport: 'routiere' | 'maritime' | 'aerienne');
    calculerFraisTransport(poids: number, distance: number): number;
    calculerFraisProduit(product: IProduct, distance: number): number;
}
//# sourceMappingURL=TransportCalculator.d.ts.map