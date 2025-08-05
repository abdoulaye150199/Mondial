import { IProduct } from './IProduct';
/**
 * Interface pour les cargaisons
 */
export interface ICargaison {
    readonly id: string;
    readonly typeTransport: 'routiere' | 'maritime' | 'aerienne';
    readonly distanceKm: number;
    readonly products: IProduct[];
    ajouterProduit(product: IProduct): void;
    calculerFrais(): number;
    sommeTotale(): number;
    nbProduit(): number;
}
//# sourceMappingURL=ICargaison.d.ts.map