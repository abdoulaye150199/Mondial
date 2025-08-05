import { AbstractCargaison } from '../abstract/AbstractCargaison';
import { IProduct } from '../interfaces/IProduct';
/**
 * Cargaison pour transport routier
 */
export declare class CargaisonRoutiere extends AbstractCargaison {
    private static readonly POIDS_MAX;
    private static readonly PRODUITS_MAX;
    constructor(id: string, distanceKm: number);
    protected peutAjouterProduit(product: IProduct): boolean;
    getRestrictions(): string[];
}
//# sourceMappingURL=CargaisonRoutiere.d.ts.map