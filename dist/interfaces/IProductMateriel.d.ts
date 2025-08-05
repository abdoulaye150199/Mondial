import { IProduct } from './IProduct';
/**
 * Interface pour les produits matériels
 */
export interface IProductMateriel extends IProduct {
    readonly type: 'materiel';
    readonly isFragile: boolean;
    readonly isCassable: boolean;
}
//# sourceMappingURL=IProductMateriel.d.ts.map