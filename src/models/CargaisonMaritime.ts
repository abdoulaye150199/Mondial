import { AbstractCargaison } from '../abstract/AbstractCargaison';
import { IProduct } from '../interfaces/IProduct';
import { IProductMateriel } from '../interfaces/IProductMateriel';
import { TransportCalculator } from '../services/TransportCalculator';
import { Logger } from '../utils/Logger';

export class CargaisonMaritime extends AbstractCargaison {
  private static readonly POIDS_MAX = 500000; 
  private static readonly PRODUITS_MAX = 1000;

  constructor(id: string, distanceKm: number) {
    super(id, 'maritime', distanceKm, new TransportCalculator('maritime'));
  }

  protected peutAjouterProduit(product: IProduct): boolean {
    if (this.sommeTotale() + product.poids > CargaisonMaritime.POIDS_MAX) {
      return false;
    }

    if (this.nbProduit() >= CargaisonMaritime.PRODUITS_MAX) {
      return false;
    }

    const productMateriel = product as IProductMateriel;
    if (productMateriel.type === 'materiel' && productMateriel.isFragile && productMateriel.isCassable) {
      Logger.warn(`Attention: Produit fragile et cassable en transport maritime: ${product.libelle}`);
    }

    return true;
  }

  public getRestrictions(): string[] {
    return [
      `Poids maximum: ${CargaisonMaritime.POIDS_MAX}kg`,
      `Nombre maximum de produits: ${CargaisonMaritime.PRODUITS_MAX}`,
      'Produits fragiles et cassables déconseillés (surcoût appliqué)'
    ];
  }
}