import { IProduct } from '../interfaces/IProduct';
import { ICargaison } from '../interfaces/ICargaison';
/**
 * Utilitaire de formatage pour l'affichage
 */
export declare class Formatter {
    static formatPrice(price: number): string;
    static formatWeight(weight: number): string;
    static formatDistance(distance: number): string;
    static formatProductSummary(product: IProduct): string;
    static formatCargaisonSummary(cargaison: ICargaison): string;
}
//# sourceMappingURL=Formatter.d.ts.map