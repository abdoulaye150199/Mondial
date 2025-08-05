import { AbstractProduct } from '../abstract/AbstractProduct';
import { IProductAlimentaire } from '../interfaces/IProductAlimentaire';
/**
 * Classe pour les produits alimentaires
 */
export declare class ProductAlimentaire extends AbstractProduct implements IProductAlimentaire {
    readonly type: "alimentaire";
    constructor(id: string, libelle: string, poids: number);
    getType(): string;
    calculerFraisSpecifiques(distance: number): number;
}
//# sourceMappingURL=ProductAlimentaire.d.ts.map