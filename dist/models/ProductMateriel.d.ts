import { AbstractProduct } from '../abstract/AbstractProduct';
import { IProductMateriel } from '../interfaces/IProductMateriel';
/**
 * Classe pour les produits matériels
 */
export declare class ProductMateriel extends AbstractProduct implements IProductMateriel {
    readonly isFragile: boolean;
    readonly isCassable: boolean;
    readonly type: "materiel";
    constructor(id: string, libelle: string, poids: number, isFragile: boolean, isCassable: boolean);
    getType(): string;
    calculerFraisSpecifiques(distance: number): number;
}
//# sourceMappingURL=ProductMateriel.d.ts.map