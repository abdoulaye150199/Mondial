import { ICargaison } from '../interfaces/ICargaison';
import { IProduct } from '../interfaces/IProduct';
import { ITransportCalculator } from '../interfaces/ITransportCalculator';
/**
 * Classe abstraite de base pour toutes les cargaisons
 */
export declare abstract class AbstractCargaison implements ICargaison {
    readonly id: string;
    readonly typeTransport: 'routiere' | 'maritime' | 'aerienne';
    readonly distanceKm: number;
    protected readonly transportCalculator: ITransportCalculator;
    protected readonly _products: IProduct[];
    protected constructor(id: string, typeTransport: 'routiere' | 'maritime' | 'aerienne', distanceKm: number, transportCalculator: ITransportCalculator);
    private validateDistance;
    get products(): IProduct[];
    ajouterProduit(product: IProduct): void;
    calculerFrais(): number;
    sommeTotale(): number;
    nbProduit(): number;
    /**
     * Méthode abstraite pour vérifier si un produit peut être ajouté
     */
    protected abstract peutAjouterProduit(product: IProduct): boolean;
    /**
     * Méthode abstraite pour obtenir les restrictions de la cargaison
     */
    abstract getRestrictions(): string[];
}
export { AbstractCargaison };
//# sourceMappingURL=AbstractCargaison.d.ts.map