import { AbstractProduct } from '../abstract/AbstractProduct';
import { IProductChimique } from '../interfaces/IProductChimique';
/**
 * Classe pour les produits chimiques
 */
export declare class ProductChimique extends AbstractProduct implements IProductChimique {
    readonly degreToxicite: number;
    readonly type: "chimique";
    constructor(id: string, libelle: string, poids: number, degreToxicite: number);
    private validateDegreToxicite;
    getType(): string;
    calculerFraisSpecifiques(distance: number): number;
}
//# sourceMappingURL=ProductChimique.d.ts.map