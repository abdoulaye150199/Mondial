import { IProduct } from '../interfaces/IProduct';
/**
 * Classe abstraite de base pour tous les produits
 */
export declare abstract class AbstractProduct implements IProduct {
    readonly id: string;
    readonly libelle: string;
    readonly poids: number;
    protected constructor(id: string, libelle: string, poids: number);
    private validatePoids;
    /**
     * Méthode abstraite pour obtenir le type de produit
     */
    abstract getType(): string;
    /**
     * Méthode abstraite pour calculer les frais spécifiques au produit
     */
    abstract calculerFraisSpecifiques(distance: number): number;
    /**
     * Méthode pour obtenir les informations du produit
     */
    getInfo(): string;
}
export { AbstractProduct };
//# sourceMappingURL=AbstractProduct.d.ts.map