import { AbstractCargaison } from '../abstract/AbstractCargaison';
import { IProduct } from '../interfaces/IProduct';
/**
 * Cargaison pour transport maritime
 */
export declare class CargaisonMaritime extends AbstractCargaison {
    private static readonly POIDS_MAX;
    private static readonly PRODUITS_MAX;
    constructor(id: string, distanceKm: number);
    protected peutAjouterProduit(product: IProduct): boolean;
    getRestrictions(): string[];
}
//# sourceMappingURL=CargaisonMaritime.d.ts.map