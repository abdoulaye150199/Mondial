import { ProductAlimentaire } from '../models/ProductAlimentaire';
import { ProductChimique } from '../models/ProductChimique';
import { ProductMateriel } from '../models/ProductMateriel';
/**
 * Factory pour créer des produits
 */
export declare class ProductFactory {
    static createProductAlimentaire(id: string, libelle: string, poids: number): ProductAlimentaire;
    static createProductChimique(id: string, libelle: string, poids: number, degreToxicite: number): ProductChimique;
    static createProductMateriel(id: string, libelle: string, poids: number, isFragile: boolean, isCassable: boolean): ProductMateriel;
}
//# sourceMappingURL=ProductFactory.d.ts.map