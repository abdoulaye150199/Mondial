import { IProduct } from '../interfaces/IProduct';
import { ICargaison } from '../interfaces/ICargaison';

/**
 * Utilitaire de formatage pour l'affichage
 */
export class Formatter {
  public static formatPrice(price: number): string {
    return `${price.toFixed(2)}€`;
  }

  public static formatWeight(weight: number): string {
    if (weight >= 1000) {
      return `${(weight / 1000).toFixed(2)}t`;
    }
    return `${weight}kg`;
  }

  public static formatDistance(distance: number): string {
    return `${distance}km`;
  }

  public static formatProductSummary(product: IProduct): string {
    return `${product.libelle} - ${this.formatWeight(product.poids)}`;
  }

  public static formatCargaisonSummary(cargaison: ICargaison): string {
    return [
      `Cargaison ${cargaison.id}`,
      `Type: ${cargaison.typeTransport}`,
      `Distance: ${this.formatDistance(cargaison.distanceKm)}`,
      `Produits: ${cargaison.nbProduit()}`,
      `Poids total: ${this.formatWeight(cargaison.sommeTotale())}`,
      `Frais total: ${this.formatPrice(cargaison.calculerFrais())}`
    ].join(' | ');
  }
}