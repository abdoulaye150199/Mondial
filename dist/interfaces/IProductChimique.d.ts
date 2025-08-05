import { IProduct } from './IProduct';
/**
 * Interface pour les produits chimiques
 */
export interface IProductChimique extends IProduct {
    readonly type: 'chimique';
    readonly degreToxicite: number;
}
//# sourceMappingURL=IProductChimique.d.ts.map